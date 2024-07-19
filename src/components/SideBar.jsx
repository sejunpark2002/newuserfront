import React from 'react';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack sx={{ padding: '24px' }} spacing={8}>
        <Stack spacing={3}>
          <Stack
            onClick={() => navigate('/')}
            direction="row"
            spacing={1}
            sx={{
              borderRadius: '5px',
              padding: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#E5E7EB',
              },
            }}
          >
            <HomeOutlinedIcon />
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 'regular',
                color: '#4B5563',
              }}
            >
              Home
            </Typography>
          </Stack>

          <Stack
            onClick={() => navigate('/users')}
            direction="row"
            spacing={1}
            sx={{
              borderRadius: '5px',
              padding: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#E5E7EB',
              },
            }}
          >
            <PersonOutlineIcon />
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 'regular',
                color: '#4B5563',
              }}
            >
              Users
            </Typography>
          </Stack>
          <Stack
            onClick={() => navigate('/report')}
            direction="row"
            spacing={1}
            sx={{
              borderRadius: '5px',
              padding: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#E5E7EB',
              },
            }}
          >
            <InsertChartOutlinedIcon />
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 'regular',
                color: '#4B5563',
              }}
            >
              Report
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SideBar;
