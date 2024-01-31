
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface SimpleDataTableProps {
    columns :GridColDef[];
    rows :GridRowsProp[];
    height?: number;
    maxPagSize?: number;
    pageSize?: number;
    }

const SimpleDataTable = ( {columns,rows,height=400 ,maxPagSize=10, pageSize=4}: SimpleDataTableProps) => {

      
  return (
    <div style={{ height: height, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: pageSize},
        },
      }}
      pageSizeOptions={[5, maxPagSize]}
      checkboxSelection
    />
  </div>
  )
}

export default SimpleDataTable  