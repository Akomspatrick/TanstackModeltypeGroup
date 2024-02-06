import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { defaultButtonRadius, autoProcessingModes } from '../../../Constants/componenetsConstants';
import { useForm } from 'react-hook-form';
import { ModelVersionGroupCreateRequestDTO } from '../../Types/ModelManagementTypes';
import { DevTool } from '@hookform/devtools';
import { useCreateModelTypeGroup } from '../../Hooks/useCreateModelTypeHooks';
import { Guid } from 'guid-typescript';
import { useDispatch, useSelector } from 'react-redux';
import { setModelVersionGroup } from '../../Reducers/SomethingReducer';
import { selectModelVersionGroup } from '../../../Store/Store';
import { useNavigate } from 'react-router-dom';

const CreateModelVersionGroup = () => {
  const dispatch = useDispatch();
  const modelversionsgropus = useSelector(selectModelVersionGroup);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, control, setError } = useForm<ModelVersionGroupCreateRequestDTO>({
    defaultValues: {
      description: '',
      modelVersionGroupName: '',
      testingMode: '',
    },
  });
  const { errors, isSubmitting } = formState;
  const { mutateAsync: addModelVersionGroupDataMutation } = useCreateModelTypeGroup();

  const onSubmit = async (data: ModelVersionGroupCreateRequestDTO) => {
    try {
      data.guidId = Guid.create().toString();
      // dispatch({ type: "modelVersionGroup", payload: data });
      dispatch(setModelVersionGroup(data));
      console.log(modelversionsgropus);
      console.log('TRY TO SEE ADDITIONmodelversionsgropus');
      navigate('/groups', { replace: true });

      // dispatch(setModelVersionGroup("xcsacsa"));
      //https://www.youtube.com/watch?v=eFh2Kr9hfyo&t=356s
      await addModelVersionGroupDataMutation(data);
    } catch (err) {
      console.log(err);
      setError('root', { message: 'err.message-- Errortype yet undecoded' });
    }
  };
  const paperStyle = {
    padding: 20,
    height: '60vh',
    width: 700,
    margin: '50px auto',
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onCancelHandler(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    navigate('/groups', { replace: true });
  }

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      sx={{
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Box component="form" noValidate sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Typography component="span" variant="h6">
            Add New Model Version Group
          </Typography>
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="modelTypeGroupName"
          label="Model Type Group Name"
          autoFocus
          {...register('modelVersionGroupName', {
            required: 'modelVersionGroupName is required',
            maxLength: { value: 32, message: 'Max length is 32' },
            minLength: { value: 2, message: 'Min length is 2' },
          })}
          error={!!errors.modelVersionGroupName}
          helperText={errors.modelVersionGroupName?.message}
        />
        {errors.modelVersionGroupName && <p>{errors.modelVersionGroupName.message}</p>}
        <TextField
          margin="normal"
          required
          fullWidth
          label="Description"
          id="modeltypeGroupDescription"
          {...register('description', {
            required: 'description is required',
            maxLength: { value: 64, message: 'Max length is 64' },
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        {errors.description && <p>{errors.description.message}</p>}
        <TextField
          id="modeltypeGrouTestingMode"
          {...register('testingMode', { required: 'testingMode is required' })}
          error={!!errors.testingMode}
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
          helperText="Please select the Testing Mode"
          variant="standard">
          {autoProcessingModes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        {errors.testingMode && <p>{errors.testingMode.message}</p>}
        {isSubmitting ? (
          <>
            <h1>Seding to Server ....Pls wait</h1>{' '}
          </>
        ) : null}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, borderRadius: defaultButtonRadius }}>
            {isSubmitting ? 'Pls wait ' : ' Create Model Type Group'}
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: defaultButtonRadius }}
            onClick={onCancelHandler}>
            {isSubmitting ? 'Pls wait ' : ' Cancel'}
          </Button>
        </Box>
        {errors.root && <p>{errors.root.message}</p>}
      </Box>
      <DevTool control={control} />
    </Paper>
  );
};

export default CreateModelVersionGroup;
