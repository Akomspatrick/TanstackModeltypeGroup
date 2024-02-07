import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SimpleDataTable from './SimpleDataTable';
import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { samplenewrows } from './SimpleDataTable.data';

describe('SimpleDataTable', () => {
  it('it should render SimpleDataTable with correct pagination', () => {
    const newrows: readonly GridValidRowModel[] = []; // Declare the newrows variable

    const columns: GridColDef[] = [
      { field: 'testingModeGroupName', headerName: 'GROUPNAME', width: 70 },
      { field: 'testingMode', headerName: 'TESTINGMODE', width: 130 },
      { field: 'description', headerName: 'DESCRIPTION', width: 130 },
      { field: 'guidId', headerName: 'GUID', width: 130 },
    ];

    render(<SimpleDataTable columns={columns} rows={newrows} pageSize={4} />);

    expect(screen.getAllByTestId('SimpleDataTableId').length).toBe(1);
    //screen.debug();
  });

  it('it should render SimpleDataTable with correct pagination', () => {
    //const newrows: readonly GridValidRowModel[] = []; // Declare the newrows variable

    const columns: GridColDef[] = [
      { field: 'testingModeGroupName', headerName: 'GROUPNAME', width: 70 },
      { field: 'testingMode', headerName: 'TESTINGMODE', width: 130 },
      { field: 'description', headerName: 'DESCRIPTION', width: 130 },
      { field: 'guidId', headerName: 'GUID', width: 130 },
    ];
    //console.log(newrows);
    render(<SimpleDataTable columns={columns} rows={samplenewrows} pageSize={4} />);

    // expect(screen.getByTestId('SimpleDataTableId')).toHaveTextContent('TESTINGMODE');
    // expect(screen.getByDisplayValue('desc5')).toBeInTheDocument();
    screen.debug();
  });

  it('should render SimpleDataTable with correct columns', () => {
    const columns: GridColDef[] = [
      { field: 'testingModeGroupName', headerName: 'GROUPNAME', width: 70 },
      { field: 'testingMode', headerName: 'TESTINGMODE', width: 130 },
      { field: 'description', headerName: 'DESCRIPTION', width: 130 },
      { field: 'guidId', headerName: 'GUID', width: 130 },
    ];

    render(<SimpleDataTable columns={columns} rows={samplenewrows} pageSize={4} />);

    // expect(screen.getByText('GROUPNAME')).toBeInTheDocument();
    // expect(screen.getByText('TESTINGMODE')).toBeInTheDocument();
    // //expect(screen.getByText('DESCRIPTION')).toBeInTheDocument();
    // expect(screen.getByText('GUID')).toBeInTheDocument();
  });
});
