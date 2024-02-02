import { Box, Button,  Paper, Typography } from "@mui/material";
import {
  GridColDef,
  GridValidRowModel
} from "@mui/x-data-grid";
import SimpleDataTable from "../../../Components/SimpleDataTable";
import { defaultButtonRadius } from "../../../Constants/componenetsConstants";
import { useGetModelVersionGroups } from "../../Hooks/useGetModelTypeGroupHooks";
import { useSelector } from "react-redux";

import { selectModelVersionGroup } from "../../../Store/Store";
import {  useNavigate } from "react-router-dom";

const ViewModelVersionGroup = () => {
    
  const modelversionsgropus = useSelector(selectModelVersionGroup)   ; 
  console.log( modelversionsgropus);
  console.log(" i WAS CALLED AT modelversionsgropus",Date.now());
  const navigate = useNavigate();
  const result = useGetModelVersionGroups();
  const newrows: GridValidRowModel[] = [];
  if (result.isSuccess) {
    if (result.data && result.data.length > 0) {
      result.data.forEach((element) => {
        newrows.push({
          id: element.guidId,
          modelVersionGroupName: element.modelVersionGroupName,
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
    { field: "modelVersionGroupName", headerName: "GROUPNAME", width: 70 },
    { field: "testingMode", headerName: "TESTINGMODE", width: 130 },
    { field: "description", headerName: "DESCRIPTION", width: 130 },
    { field: "guidId", headerName: "GUID", width: 130 },
    //   { field: "id", headerName: "ID", width: 100 ,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.guidId} `},
    //
  ];

  const paperStyle = {
    padding: 2,
    height: "70vh",
    width: 800,
    margin: "20px auto",
  };
    function NavigateHandler(event: React.MouseEvent<HTMLButtonElement>): void {

        navigate("/newgroups", { replace: true });

    }

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
        sx={{ mt: 3, margin: 5, padding: 0, width: "95%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            padding: 0,
            width: "100%",
          }}
        >
          <Typography component="span" variant="h6">
            Model Version Groups
          </Typography>

          <Button
         
            
            variant="contained"
            sx={{ borderRadius: defaultButtonRadius, marginBottom: 4 }}
            color="primary"
            onClick={NavigateHandler}
          >
            + Add New Model Version Group
          </Button>
        </Box>
        {/* <SimpleDataTable columns={columns} rows={rows} pageSize={3} /> */}
        {result.isSuccess && result.data && result.data.length > 0 && (
          <SimpleDataTable columns={columns} rows={newrows} pageSize={3} />
        )}

      </Box>
    </Paper>
  );
};

export default ViewModelVersionGroup;
