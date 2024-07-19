import React from 'react';
import { Box, Stack } from '@mui/system';
import { useAppSelector } from '../../store';
import { Typography } from '@mui/material';
import ShowNumberComp from './ShowNumberComp';
import ShowPieChart from './ShowPieChart';

const ShowReport = () => {
  const { userList } = useAppSelector((state) => state.userReducer);
  const totalusers = userList.length;
  const totalmanagers = userList.filter(
    (user) => user.role === 'manager'
  ).length;
  const totaldevelopers = userList.filter(
    (user) => user.role === 'developer'
  ).length;
  const totaldesigners = userList.filter(
    (user) => user.role === 'designers'
  ).length;

  return (
    <>
      <Box sx={{ padding: '24px 64px 0 64px' }}>
        <Typography
          sx={{
            fontSize: '22px',
            fontFamily: 'Inter',
            fontWeight: '800',
            color: '#1A191D',
          }}
        >
          Report
        </Typography>
        <Stack direction="row" spacing={3} mt={'50px'}>
          <ShowNumberComp title={'Total Users'} number={totalusers} />
          <ShowNumberComp title={'Total Managers'} number={totalmanagers} />
          <ShowNumberComp title={'Total Developers'} number={totaldevelopers} />
          <ShowNumberComp title={'Total Designers'} number={totaldesigners} />
        </Stack>
        <Stack direction="row" spacing={3} mt={'50px'}>
          <ShowPieChart />
          <ShowPieChart />
        </Stack>
      </Box>
    </>
  );
};

export default ShowReport;
