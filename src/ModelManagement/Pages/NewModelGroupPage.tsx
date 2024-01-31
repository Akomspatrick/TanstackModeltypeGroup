import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { defaultButtonRadius } from "../../Constants/componenetsConstants";
import SimpleDataTable from "../../Components/SimpleDataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const NewModelGroupPage = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 900,
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
      <Box component="form" noValidate sx={{ mt: 1 }}>
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
          <Button
            variant="contained"
            sx={{ borderRadius: defaultButtonRadius, marginBottom: 4 }}
            color="primary"
          >
            {" "}
           + New Post
          </Button>
        </Box>
      <SimpleDataTable columns={columns} rows={rows} />


        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Paper>
  );
};

export default NewModelGroupPage;
