import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SideBar from './components/SideBar';
import Rightcolumn from './components/Rightcolumn';
import { useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import { Stack } from '@mui/system';
import Header from './components/Header';


const App = () => {
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  
  return (
    <>
<ThemeProvider theme={theme}>
      <Header/>
      <Box sx={{ height: "100vh", display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <Grid container spacing={0} sx={{ borderColor:'#D0D5DD',flexDirection: isSmallScreen ? 'column' : 'row', flexGrow: 1 }}>
          <Grid borderRight={1} item xs={12} lg={2} sx={{ borderColor:'#D0D5DD',backgroundColor: "#FFFFFF", width: isSmallScreen ? '100%' : '256px' }}>
            <SideBar/>
          </Grid>
          <Grid item xs={12} lg={10} sx={{ backgroundColor: "#FAFAFC", flexGrow: 1 }}>
            <Rightcolumn />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
   
     
       
    </>
    
  )
}

export default App

