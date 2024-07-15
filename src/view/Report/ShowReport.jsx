import React from 'react'
import { Box, Stack} from '@mui/system'
import {useAppDispatch,useAppSelector} from '../../store';
import { Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


const ShowReport = () => {

  const {userList} = useAppSelector((state)=> state.userReducer)
  const totalusers = userList.length

  return (
    <>
      <Box  sx={{padding:"24px 64px 0 64px"}}>
      <Typography sx={{fontSize:"22px",fontFamily:'Inter',fontWeight:"800",color:"#1A191D"}}>Report</Typography>
      <Stack direction="row" spacing={3} mt={"50px"}>
      <Box 
            sx={{
              backgroundColor:"#FFFFFF",
              boxShadow: 2,
              borderRadius:"16px",
              padding:"20px",
            }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <PeopleOutlineIcon sx={{fontSize:"50px",borderRadius:"5px"}}/>
                <Stack textAlign="center">
                  <Typography sx={{fontSize:"40px",fontFamily:'Inter',fontWeight:"600",color:"#1A191D"}}>{totalusers}</Typography>
                  <Typography sx={{fontSize:"20px",fontFamily:'Inter',fontWeight:"600",color:"#1A191D"}}>Total Users</Typography>
                </Stack>
              </Stack>

        </Box>
        <Box 
            sx={{
              backgroundColor:"#FFFFFF",
              boxShadow: 2,
              borderRadius:"16px",
              padding:"20px",
              

            }}>
           hello
        </Box>
      </Stack>
    </Box>
    </>
  )
}

export default ShowReport


