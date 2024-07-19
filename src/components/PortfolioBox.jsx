import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import Box from '@mui/material/Box';

import UpdateModal from './UpdateModal';
import DeleteUser from './DeleteUser';

const PortfolioBox = ({ selecteduser }) => {
  // const dispatch = useAppDispatch();
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          boxShadow: 2,
          borderRadius: '16px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Stack>
          <img src={selecteduser.imageUrl} alt="profile img" />
          <Stack pt="8px">
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: '700',
                color: '#000000',
              }}
            >
              {selecteduser.name}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 'regular',
                color: '#4B5563',
              }}
            >
              {selecteduser.email}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 'regular',
                color: '#4B5563',
              }}
            >
              {selecteduser.phone}
            </Typography>
            <Stack sx={{ mt: '10px' }} spacing={2} direction="row">
              <UpdateModal selecteduser={selecteduser} />
              <DeleteUser selecteduser={selecteduser} />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default PortfolioBox;
