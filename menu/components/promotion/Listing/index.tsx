import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

//https://mui.com/pt/x/react-data-grid/column-definition/

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'edit',
    headerName: 'Editar',
    renderCell: (params) => (
      <Link href={`/promotion/edit/${encodeURIComponent(params.value)}`}>
        <EditIcon/>
      </Link>
    ),
  },
  {
    field: 'delete',
    headerName: 'Deletar',
    renderCell: (params) => (
      <Link href={`/promotion/delete/${encodeURIComponent(params.value)}`}>
        <DeleteIcon/>
      </Link>
    ),
  },  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, edit:1, delete: 1 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, edit:1, delete: 1 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, edit:1, delete: 1 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, edit:1, delete: 1 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, edit:1, delete: 1 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, edit:1, delete: 1 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, edit:1, delete: 1 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, edit:1, delete: 1 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, edit:1, delete: 1 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
            toolbar: { showQuickFilter: true },
          }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
