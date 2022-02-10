import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Link  from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import '@assets/css/ListClient.css';

Row.propTypes = {
    row: PropTypes.shape({
      managerName: PropTypes.string.isRequired,
      managerEmail: PropTypes.string.isRequired,
      msa: PropTypes.bool.isRequired,
      projects: PropTypes.arrayOf(
        PropTypes.shape({
          projectName: PropTypes.string.isRequired,
          projectId: PropTypes.string.isRequired,
      }),
      ).isRequired,
      clientName: PropTypes.string.isRequired,
     }).isRequired,
  };
  

export function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <TableRow
          sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.clientName}
          </TableCell>
          <TableCell align="right">{row.managerName}</TableCell>
          <TableCell align="right">{row.managerEmail}</TableCell>
          <TableCell align="right">{row.msa ? "True" : "False"}</TableCell>
          <TableCell align="right">
            <Link 
            href="https://mui.com/components/tables/" 
            color="inherit" 
            target="_blank">
              {row.details}
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="valuesInTable" colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Projects
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Project name</TableCell>
                      <TableCell>Project id</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.projects.map((projectRow) => (
                      <TableRow key={projectRow.projectName}>
                        <TableCell component="th" scope="row">
                          {projectRow.projectName}
                        </TableCell>
                        <TableCell>{projectRow.projectId}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }