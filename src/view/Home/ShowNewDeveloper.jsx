import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useAppSelector } from '../../store';
import Avatar from '@mui/material/Avatar';

export default function BasicTable() {
  const { userList } = useAppSelector((state) => state.userReducer);

  return (
    <>
      <Typography
        sx={{
          padding: '45px 20px 20px 20px',
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: '600',
          color: '#1A191D',
        }}
      >
        New Developers
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 'none', border: 'none' }}
      >
        <Table sx={{ minWidth: 300, border: 'none' }} aria-label="simple table">
          <TableBody>
            {userList
              .filter((user) => user.role === 'developer')
              .slice(-5)
              .map((user) => (
                <TableRow
                  key={user.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    borderBottom: '1px solid rgba(224, 224, 224, 1)',
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      padding: '6px',
                      borderBottom: 'none',
                      paddingLeft: '20px',
                    }}
                  >
                    <Avatar alt="profie pic" src={user.imageUrl} />
                  </TableCell>
                  <TableCell sx={{ padding: '6px', borderBottom: 'none' }}>
                    {user.name}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
