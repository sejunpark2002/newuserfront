import React from 'react';
// import useState from 'react';
// import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import PortfolioBox from './PortfolioBox';
import InputModal from './InputModal';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useAppSelector } from '../store';
// import { useAppDispatch, useAppSelector } from '../store';
// import { createUserAction } from '../redux/userAction';
// import { getUserAPI } from '../api/getUserApi';
const ShowUser = () => {
  const { userList } = useAppSelector((state) => state.userReducer);

  // const dispatch = useAppDispatch();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const showUsers = async () => {
  //     try {
  //       const result = await getUserAPI();
  //       console.log(result);
  //       dispatch(createUserAction(result));
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //       setLoading(false);
  //     }
  //   };
  //   showUsers();
  // }, []);

  if (!userList) {
    return;
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent={'space-between'}
        sx={{ padding: '24px 64px 0 64px' }}
      >
        <Typography
          sx={{
            fontSize: '22px',
            fontFamily: 'Inter',
            fontWeight: '800',
            color: '#1A191D',
          }}
        >
          User List
        </Typography>
        <InputModal />
      </Stack>
      <Grid container spacing={4} padding="64px" flexGrow={1}>
        {userList.map((user) => (
          <Grid key={user.id} item lg={2.4}>
            <PortfolioBox selecteduser={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShowUser;
