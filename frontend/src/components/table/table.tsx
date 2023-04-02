import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './styles.module.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#212121",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    borderWidth:2,
    fontFamily: "Montserrat Alternates",
    fontSize: 15,
    letterSpacing: 0,
    color:'#212121',
    textAlign:"center",
    borderColor:"#212121",
    backgroundColor: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  // hide last border
  '&:last-child td, &:last-child th': {
    width:"70%",
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

  const CustomTable=()=> {
    return (
      <TableContainer style={{borderRadius:'15px',width: "80%",margin: "0 auto",border:'2px solid #212121' }}  component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ width: '35%', borderRight:'2px solid #ffffff'  }} align="center">Дата</StyledTableCell>
            <StyledTableCell align="center">Прогноз продажа</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell style={{ width: '35%', borderRight:'2px solid #212121' }} align="center">{row.calories}</StyledTableCell>
              <StyledTableCell  align="center">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
  export default CustomTable