import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { Typography, TextField } from '@mui/material';
import { storage } from '../firebase.config';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { useAppDispatch } from '../store';
import { createUserAction } from '../redux/userAction';
import { getUserAPI } from '../api/getUserApi';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UpdateUser = ({ selecteduser, onClose }) => {
  const dispatch = useAppDispatch();

  const [userInfo, setUserInfo] = useState({
    name: selecteduser.name,
    email: selecteduser.email,
    phone: selecteduser.phone,
    role: selecteduser.role,
    gender: selecteduser.gender,
  });

  const [image, setImage] = useState(null);

  const changeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleUploadImage = (e) => {
    const { files } = e.target;
    if (files?.length) {
      setImage(files[0]);
    }
  };

  const deleteImageInStorage = async (imagePath) => {
    const imageRef = ref(storage, imagePath);
    const result = await deleteObject(imageRef);
    console.log(result);
  };

  const submitChange = async () => {
    try {
      let imageUrl = selecteduser.imageUrl;
      let imgPath = selecteduser.imagePath;

      if (image) {
        await deleteImageInStorage(selecteduser.imagePath);
        const currentTime = Date.now();
        const imgPath = `images/${image.name}_${currentTime}`;
        const imageRef = ref(storage, imgPath);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const newUser = {
        id: selecteduser.id,
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        gender: userInfo.gender,
        role: userInfo.role,
        imageUrl: imageUrl,
        imagePath: imgPath,
        timeCreated: selecteduser.timeCreated,
        // imageUrl:imgUrl as string
      };

      await fetch(`${process.env.REACT_APP_API_ADDRESS_DEV}`, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      onClose();
      const result = await getUserAPI();
      dispatch(createUserAction(result));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Stack>
        <Typography sx={{ color: '#344054', fontSize: '13px' }} mb={'5px'}>
          Name
        </Typography>
        <TextField
          type="text"
          name="name"
          value={userInfo.name}
          onChange={changeUserInfo}
          size="small"
          sx={{ width: '100%', height: '34px', mb: '20px' }}
        />
        <Typography sx={{ color: '#344054', fontSize: '13px' }} mb={'5px'}>
          Email
        </Typography>
        <TextField
          type="text"
          name="email"
          value={userInfo.email}
          onChange={changeUserInfo}
          size="small"
          sx={{ width: '100%', height: '34px', mb: '20px' }}
        />
        <Typography sx={{ color: '#344054', fontSize: '13px' }} mb={'5px'}>
          Phone
        </Typography>
        <TextField
          type="text"
          name="phone"
          value={userInfo.phone}
          onChange={changeUserInfo}
          size="small"
          sx={{ width: '100%', height: '34px', mb: '20px' }}
        />
        <Typography sx={{ color: '#344054', fontSize: '13px' }} mb={'5px'}>
          Gender
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="gender"
            value={userInfo.gender}
            label="Age"
            onChange={changeUserInfo}
            sx={{ height: 40, mb: '20px' }}
          >
            <MenuItem value={'female'}>Female</MenuItem>
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'nonbinary'}>Nonbinary</MenuItem>
          </Select>
        </FormControl>
        <Typography sx={{ color: '#344054', fontSize: '13px' }} mb={'5px'}>
          Role
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="role"
            value={userInfo.role}
            label="Age"
            onChange={changeUserInfo}
            sx={{ height: 40, mb: '20px' }}
          >
            <MenuItem value={'manager'}>Manager</MenuItem>
            <MenuItem value={'developer'}>Developer</MenuItem>
            <MenuItem value={'designer'}>Designer</MenuItem>
          </Select>
        </FormControl>
        <Typography sx={{ color: '#344054', fontSize: '13px' }} mb={'5px'}>
          Profile Picture
        </Typography>
        <TextField
          type="file"
          onChange={handleUploadImage}
          size="small"
          sx={{ width: '100%', height: '34px', mb: '20px' }}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FFC401',
              '&:hover': {
                borderColor: '#436AE9', // Keep the same color on hover
                backgroundColor: '#E6B337',
                color: '#FFFFFF',
                borderWidth: '2px', // Ensure the border width stays the same on hover
              },
            }}
            onClick={() => {
              submitChange();
            }}
          >
            Edit User
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FFC401',
              color: '#FFC401',
              '&:hover': {
                borderColor: '#FFC401', // Keep the same color on hover
                backgroundColor: '#F0F0F0',
                // Ensure the border width stays the same on hover
              },
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default UpdateUser;
