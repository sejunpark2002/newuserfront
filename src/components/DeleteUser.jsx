import React from 'react';
import { storage } from '../firebase.config';
import { ref, deleteObject } from 'firebase/storage';
import { createUserAction } from '../redux/userAction';
import { getUserAPI } from '../api/getUserApi';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAppDispatch } from '../store';

const DeleteUser = ({ selecteduser }) => {
  const dispatch = useAppDispatch();

  const deleteUserAPI = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_ADDRESS_DEV}?id=${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return await res.json();
  };

  const deleteImageInStorage = async (imgpath) => {
    const imageRef = ref(storage, imgpath);
    const result = await deleteObject(imageRef);
    console.log(result);
  };

  const deleteUser = async ({ id, imagePath }) => {
    await deleteImageInStorage(imagePath);

    await deleteUserAPI(id);

    const result = await getUserAPI();
    dispatch(createUserAction(result));
  };

  return (
    <>
      <IconButton
        onClick={() => deleteUser(selecteduser)}
        sx={{ padding: '0' }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </>
  );
};

export default DeleteUser;
