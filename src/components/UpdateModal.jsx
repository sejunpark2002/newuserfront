import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UpdateUser from './UpdateUser';
import { IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35vw',
  bgcolor: 'background.paper',
  border: '1px solid #E5E7EB',
  borderRadius: '5px',
  boxShadow: 24,
  padding: 0,
};

export default function UpdateModal({ selecteduser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton sx={{ padding: '0' }} onClick={handleOpen}>
        <EditOutlinedIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            borderBottom={1}
            sx={{
              px: '20px',
              borderColor: '#D0D5DD',
              bgcolor: '#F8F9F8',
              width: '100',
            }}
          >
            <Typography
              sx={{
                color: '#101828',
                fontWeight: 600,
                fontSize: '20px',
                paddingLeft: '30px',
                paddingTop: '17px',
                paddingBottom: '19px',
                fontFamily: 'Inter',
              }}
            >
              Edit a New User
            </Typography>
          </Box>
          <Box sx={{ padding: '24px' }}>
            <UpdateUser selecteduser={selecteduser} onClose={handleClose} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
