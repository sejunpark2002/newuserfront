import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import {useAppSelector} from '../../store'

function createData(name, calories, ) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
];

export default function BasicTable() {
  const {userList} = useAppSelector((state)=> state.userReducer)

  return (
    <>
      <Typography sx={{padding:"45px 20px 20px 20px",fontSize:"20px",fontFamily:'Inter',fontWeight:"600",color:"#1A191D"}}>New Uers</Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 'none', border: 'none' }}>
      <Table sx={{ minWidth: 550, border: 'none' }} aria-label="simple table">
        <TableBody>
          {userList.map((user, index) => (
            <TableRow
              key={user.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                borderBottom: index < rows.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none',
              }}
            >
              <TableCell component="th" scope="row" sx={{padding: '6px', borderBottom: 'none',paddingLeft: '20px'  }}>
              <img width='20px' height='20px' src={user.imageUrl} alt='profile img'/>
              </TableCell>
              <TableCell sx={{ padding: '6px', borderBottom: 'none' }}>{user.name}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  
  );
}
