import React from 'react'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import logo from '../images/userlogo.png'



const Header = () => {
  return (
    <>
      
      <Stack borderBottom={1} direction="row" spacing={1} sx={{bgcolor: '#FFFFFF',borderColor:'#D0D5DD',height:"55px",alignItems: "center",padding:"20px"}}>
        <img alt="logoimage" width="24px" height="24px" src={logo}></img>
        <Typography sx={{fontSize:"18px",fontFamily:'Inter',fontWeight:"800",color:"#1F2836"}}>User Management</Typography>
      </Stack>
     
    </>
  )
}

export default Header