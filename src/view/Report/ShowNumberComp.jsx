import React from 'react';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const ShowNumberComp = ({ title, number }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 2,
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <Stack direction="row" spacing={3} alignItems="center">
        <PeopleOutlineIcon sx={{ fontSize: '50px', borderRadius: '5px' }} />
        <Stack textAlign="center">
          <Typography
            sx={{
              fontSize: '40px',
              fontFamily: 'Inter',
              fontWeight: '600',
              color: '#1A191D',
            }}
          >
            {number}
          </Typography>
          <Typography
            sx={{
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              color: '#1A191D',
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShowNumberComp;
