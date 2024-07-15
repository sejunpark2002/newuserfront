import React from 'react'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import PortfolioBox from './PortfolioBox';
import Userlogo from '../images/userlogo.png'
import Gamelogo from '../images/onetofifty.png'
import InputModal from './InputModal';
import ShowUser from './ShowUser';
import Home from '../view/Home/Home';
import ShowReport from '../view/Report/ShowReport'
import { Route, Routes,Navigate } from 'react-router-dom';

const Rightcolumn = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/users' element={<ShowUser/>}/>
      <Route path='/report' element={<ShowReport/>}/>

    </Routes>   
    </>
  )
}

export default Rightcolumn