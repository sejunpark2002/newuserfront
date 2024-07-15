import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';

import AddUser from './AddUser';
import TextField from '@mui/material/TextField';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "35vw",
  bgcolor: 'background.paper',
  border: '1px solid #E5E7EB',
  borderRadius:'5px',
  boxShadow: 24,
  padding: 0,
};

export default function InputModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />} 
            sx={{backgroundColor:"#FFC401",borderWidth:"2px", borderColor: '#436AE9',color:'#FFFFFF',
              '&:hover': {
                        borderColor: '#436AE9', // Keep the same color on hover
                        backgroundColor: '#E6B337',
                        color:'#FFFFFF',
                        borderWidth: '2px', // Ensure the border width stays the same on hover
                         }, }}>
            Add Users
      </Button>
 
   
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>
        <Box
           borderBottom={1}
           sx={{px:'20px', borderColor:'#D0D5DD', bgcolor: '#F8F9F8', width: '100' }}
        >
          <Typography 
            sx={{ 
              color:'#101828',
              fontWeight: 600, 
              fontSize:'20px',
              paddingLeft:'30px',
              paddingTop:'17px',
              paddingBottom:'19px',
              fontFamily:'Inter',
               }} >Add a New User</Typography>
         </Box>
         <Box sx={{padding:'24px'}}>
          <AddUser onClose={handleClose}/>      
         </Box>
        
          
        </Box>
      </Modal>
    </div>
  );
}