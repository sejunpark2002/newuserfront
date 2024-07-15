import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import PortfolioBox from './PortfolioBox';
import InputModal from './InputModal';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import {useAppDispatch,useAppSelector} from '../store';
import {createUserAction} from '../redux/userAction'

const ShowUser = () => {

  const {userList} = useAppSelector((state)=> state.userReducer)
  const dispatch = useAppDispatch();

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const getUsersAPI = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_ADDRESS_DEV}`,{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        const {result} = await res.json();
        console.log(result)
        dispatch(createUserAction(result))
        setLoading(false)

      } catch(error){
        console.error("Error fetching users:", error);
        setLoading(false)
      }
      
    }
    getUsersAPI()
  },[])

  if(!userList) {
    return
  }
  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Stack direction="row" justifyContent={'space-between'}  sx={{padding:"24px 64px 0 64px"}}>
        <Typography sx={{fontSize:"22px",fontFamily:'Inter',fontWeight:"800",color:"#1A191D"}}>User List</Typography>
        <InputModal/>  
      </Stack>
      <Grid container spacing={4} padding="64px" flexGrow={1}>
      {userList.map((user) => (
      <Grid key={user.id} item lg={2.4}>
        <PortfolioBox 
          selecteduser={user}
        />
      </Grid>
    ))}
      </Grid>
    
  </>
  )

  
  
}

export default ShowUser