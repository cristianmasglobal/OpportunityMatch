import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { Row } from '../../components/Row'

const rows = [
  createData('JCI', 'Cristian Ceballos', 'cristian.ceballos@masglobalconsulting.com', true, 'Details'),
  createData('MELI', 'Natalia Murcia', 'natalia.murcia@masglobalconsulting.com', false, 'Details'),
  createData('CLOUD', 'Jaime Camargo', 'j.camargo@masglobalconsulting.com', true, 'Details'),
  createData('MATTELSA', 'Alejo', 'alejito@masglobalconsulting.com', false, 'Details'),
  createData('JEEP', 'Martin', 'Martin@masglobalconsulting.com', false, 'Details'),
  createData('Renault', 'Onofre', 'a@masglobalconsulting.com', false, 'Details'),
  createData('Toyota', 'Alberto', 'b@masglobalconsulting.com', false, 'Details'),
  createData('Huawei', 'Ortiz Arango', 'c@masglobalconsulting.com', false, 'Details'),
  createData('Tennis', 'Omaira', 'd@masglobalconsulting.com', false, 'Details'),
  createData('ADIDAS', 'Carlos', 'e@masglobalconsulting.com', false, 'Details'),
  createData('Nike', 'Gloria', 'f@masglobalconsulting.com', false, 'Details'),
  createData('Surtimax', 'Alejandra', 'g@masglobalconsulting.com', false, 'Details'),
];

function createData(clientName, managerName, managerEmail, msa, details) {
  return {
    clientName,
    managerName,
    managerEmail,
    msa,
    details,
    projects: [
      {
        projectName: 'JCI control',
        projectId: '11091700',
      },
      {
        projectName: 'JCI interview',
        projectId: '11091701',
      },
    ],
  };
}

export default function ListClient() {

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell><strong>Client name</strong></TableCell>
              <TableCell align="right"><strong>Manager name</strong></TableCell>
              <TableCell align="right"><strong>Manager email</strong></TableCell>
              <TableCell align="right"><strong>MSA</strong></TableCell>
              <TableCell align="right"><strong>Details</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Row key={row.clientName} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
