import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import {defaultButtonRadius,autoProcessingModes, } from "../../../Constants/componenetsConstants"; 
import { useForm } from "react-hook-form";
import { ModelVersionGroupCreateRequestDTO } from "../../Types/ModelManagementTypes";
import { DevTool } from "@hookform/devtools";
import { useCreateModelTypeGroup } from "../../Hooks/useCreateModelTypeHooks";
import { Guid } from "guid-typescript";

const CreateModelVersionGroup = () => {
  const { register, handleSubmit, formState, control, setError } =
    useForm<ModelVersionGroupCreateRequestDTO>({defaultValues: {  description: "", modelVersionGroupName: "",testingMode: "",}, });
  const { errors, isSubmitting } = formState;
  const { mutateAsync: addModelVersionGroupDataMutation } = useCreateModelTypeGroup();
  const onSubmit = async (data: ModelVersionGroupCreateRequestDTO) => {
    try {
      data.guidId = Guid.create().toString();
      await addModelVersionGroupDataMutation(data);
    } catch (err) {
      console.log(err);
      setError("root", { message: "err.message-- Errotype yet undecoded" });
    }
  };
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 700,
    margin: "50px auto",
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      sx={{
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        noValidate
        sx={{ mt: 5 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
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
          {...register("modelVersionGroupName", {
            required: "modelVersionGroupName is required",
          })}
          error={!!errors.modelVersionGroupName}
          helperText={errors.modelVersionGroupName?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Description"
          id="modeltypeGroupDescription"
          {...register("description", { required: "description is required" })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          id="modeltypeGrouTestingMode"
          {...register("testingMode", { required: "testingMode is required" })}
          error={!!errors.testingMode}
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
          helperText="Please select the Testing Mode"
          variant="standard"
        >
          {autoProcessingModes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        {isSubmitting ? (
          <>
            <h1>Seding to Server ....Pls wait</h1>{" "}
          </>
        ) : null}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: defaultButtonRadius }}
        >
          {isSubmitting ? "Pls wait " : " Create Model Type Group"}
        </Button>
      </Box>
      <DevTool control={control} />
    </Paper>
  );
};

export default CreateModelVersionGroup;
