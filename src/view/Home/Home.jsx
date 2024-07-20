import React, { useEffect } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import Calendar from '../../components/Calendar';
import ShowNewDeveloper from './ShowNewDeveloper';
import ShowNewManager from './ShowNewManager';
import { useAppDispatch } from '../../store';
import { createUserAction } from '../../redux/userAction';
import { getUserAPI } from '../../api/getUserApi';
import ShowNewUserInfo from './ShowNewUserInfoList';
import ShowNewDesigner from './ShowNewDesigner';

const Home = () => {
  // const { userList } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const showUers = async () => {
      try {
        const result = await getUserAPI();
        dispatch(createUserAction(result));
      } catch (error) {
        console.log('Error fetching user data', error);
      }
    };
    showUers();
  }, []);
  return (
    <>
      <Box sx={{ padding: '24px 64px 0 64px' }}>
        <Typography
          sx={{
            fontSize: '22px',
            fontFamily: 'Inter',
            fontWeight: '800',
            color: '#1A191D',
            mb: '20px',
          }}
        >
          Welcome, User!
        </Typography>
        <Stack spacing={4}>
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
              <ShowNewManager />
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
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                boxShadow: 2,
                borderRadius: '16px',
              }}
            >
              <ShowNewDesigner />
            </Box>
          </Stack>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              boxShadow: 2,
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <Typography
              sx={{
                padding: '45px 20px 20px 20px',
                fontSize: '20px',
                fontFamily: 'Inter',
                fontWeight: '600',
                color: '#1A191D',
              }}
            >
              New User List
            </Typography>
            <ShowNewUserInfo />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
