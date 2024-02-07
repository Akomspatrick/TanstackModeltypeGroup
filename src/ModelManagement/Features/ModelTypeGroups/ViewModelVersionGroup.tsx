import { Box, Button, Paper, Typography } from '@mui/material';
import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import SimpleDataTable from '../../../Components/SimpleDataTable';
import { defaultButtonRadius } from '../../../Constants/componenetsConstants';

import { useNavigate } from 'react-router-dom';
import { useGetTestingModeGroups } from '../../Hooks/useGetModelTypeGroupHooks';

const ViewModelVersionGroup = () => {
  const navigate = useNavigate();
  const result = useGetTestingModeGroups();
  const newrows: GridValidRowModel[] = [];
  if (result.isSuccess) {
    if (result.data && result.data.length > 0) {
      result.data.forEach((element) => {
        newrows.push({
          id: element.guidId,
          testingModeGroupName: element.testingModeGroupName,
          testingMode: element.testingMode,
          description: element.description,
          guidId: element.guidId,
        });
      });
    }
  }
  if (result.isError) {
    return <div>Error..... {result.error.message}</div>;
  }
  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  const columns: GridColDef[] = [
    { field: 'testingModeGroupName', headerName: 'GROUPNAME', width: 70 },
    { field: 'testingMode', headerName: 'TESTINGMODE', width: 130 },
    { field: 'description', headerName: 'DESCRIPTION', width: 130 },
    { field: 'guidId', headerName: 'GUID', width: 130 },
    //   { field: "id", headerName: "ID", width: 100 ,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.guidId} `},
    //
  ];

  const paperStyle = {
    padding: 2,
    height: '70vh',
    width: 800,
    margin: '20px auto',
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function NavigateHandler(event: React.MouseEvent<HTMLButtonElement>): void {
    navigate('/newgroups', { replace: true });
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
      <Box component="form" noValidate sx={{ mt: 3, margin: 5, padding: 0, width: '95%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            padding: 0,
            width: '100%',
          }}>
          <Typography component="span" variant="h6">
            Model Version Groups
          </Typography>

          <Button
            variant="contained"
            sx={{ borderRadius: defaultButtonRadius, marginBottom: 4 }}
            color="primary"
            onClick={NavigateHandler}>
            + Add New Model Version Group
          </Button>
        </Box>
        {/* <SimpleDataTable columns={columns} rows={rows} pageSize={3} /> */}
        {result.isSuccess && result.data && result.data.length > 0 && (
          <SimpleDataTable columns={columns} rows={newrows} pageSize={4} />
        )}
      </Box>
    </Paper>
  );
};

export default ViewModelVersionGroup;
