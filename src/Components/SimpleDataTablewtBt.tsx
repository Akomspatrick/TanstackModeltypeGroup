import { Button } from '@mui/material';

import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import SimpleDataTable from './SimpleDataTable';
import { samplenewrows } from './SimpleDataTable.data';

function SimpleDataTablewtBt() {
  const columns: GridColDef[] = [
    //{ field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      valueGetter: (params: GridValueGetterParams) => `${params.row.guidId} `,
    },

    { field: 'testingModeGroupName', headerName: 'GROUPNAME', width: 70 },
    { field: 'testingMode', headerName: 'TESTINGMODE', width: 130 },
    { field: 'description', headerName: 'DESCRIPTION', width: 130 },
    { field: 'guidId', headerName: 'GUID', width: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      headerAlign: 'left',
      width: 100,
      renderCell: (params: GridRenderCellParams) => {
        // Add the missing type GridValueGetterParams
        return (
          <div>
            <Button
              variant="contained"
              size="small"
              color="warning"
              disableRipple
              onClick={() => {
                alert(params.row);
              }}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  //   { field: "id", headerName: "ID", width: 100 ,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.guidId} `},
  //
  //console.log(newrows);
  return (
    <>
      {/* <h1>Akoms App- React Query - Complete Tutorial Cosden Solutions
 https://www.youtube.com/watch?v=8K1N3fE-cDs</h1>
 <h2>https://www.youtube.com/watch?v=3e-higRXoaM</h2>      
 
 https://www.google.com/search?q=crud+with+react&rlz=1C1UEAD_enCA1075CA1075&oq=crud+with+rea&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJNTk1NmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:9ab4ed11,vid:DOkSU3yg4vQ,st:0
 */}
      {/* npm install -D jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event */}
      {/* https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/vite.config.ts 
https://www.youtube.com/watch?v=G-4zgIPsjkU&t=412s
*/}
      {/* <NewModelGroupPage /> */}
      <SimpleDataTable columns={columns} rows={samplenewrows} pageSize={7} />;
    </>
  );
}

export default SimpleDataTablewtBt;
