import React from 'react';
import { Box, Stack } from '@mui/system';
import { useAppSelector } from '../../store';
import { Typography } from '@mui/material';
import ShowNumberComp from './ShowNumberComp';
import ShowPieChart from './ShowPieChart';
import ShowLineChart from './ShowLineChart';

const ShowReport = () => {
  const { userList } = useAppSelector((state) => state.userReducer);
  // const totalusers = userList.length;

  const totalmanagers = userList.filter(
    (user) => user.role === 'manager'
  ).length;
  const totaldevelopers = userList.filter(
    (user) => user.role === 'developer'
  ).length;
  const totaldesigners = userList.filter(
    (user) => user.role === 'designer'
  ).length;

  const totalfemale = userList.filter(
    (user) => user.gender === 'female'
  ).length;
  const totalmale = userList.filter((user) => user.gender === 'male').length;
  const totalnonbinary = userList.filter(
    (user) => user.gender === 'nonbinary'
  ).length;

  // const numberbyroles = {
  //   manager: totalmanagers,
  //   developer: totaldevelopers,
  //   designer: totaldesigners,
  // };

  const numberbygender = {
    female: totalfemale,
    male: totalmale,
    nonbindary: totalnonbinary,
  };

  const numberbyroles = {};

  userList.forEach((user) => {
    const role = user.role;
    if (numberbyroles[role]) {
      numberbyroles[role]++;
    } else {
      numberbyroles[role] = 1;
    }
  });

  console.log('the number by role', numberbyroles);

  // const rolelabel = ['manager', 'developer', 'designer'];
  // const genderlabel = ['female', 'male', 'nonbinary'];

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
          <ShowNumberComp title={'Total Users'} number={userList.length} />
          <ShowNumberComp title={'Total Managers'} number={totalmanagers} />
          <ShowNumberComp title={'Total Developers'} number={totaldevelopers} />
          <ShowNumberComp title={'Total Designers'} number={totaldesigners} />
        </Stack>
        <Stack direction="row" spacing={3} mt={'50px'}>
          <ShowPieChart title={'Users by roles'} data={numberbyroles} />
          <ShowPieChart title={'Users by gender'} data={numberbygender} />
        </Stack>
        <Box mt={'50px'} width={'500px'}>
          <ShowLineChart />
        </Box>
      </Box>
    </>
  );
};

export default ShowReport;
