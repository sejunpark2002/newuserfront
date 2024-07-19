import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

import Calendar from '../../components/Calendar';
import ShowNewDeveloper from './ShowNewDeveloper';

import ShowNewUser from './ShowNewUser';

const Home = () => {
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
          Welcome, User!
        </Typography>
        <Stack direction="row" spacing={3} mt={'50px'}>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              boxShadow: 2,
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <Calendar />
          </Box>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              boxShadow: 2,
              borderRadius: '16px',
            }}
          >
            <ShowNewUser />
          </Box>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              boxShadow: 2,
              borderRadius: '16px',
            }}
          >
            <ShowNewDeveloper />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
