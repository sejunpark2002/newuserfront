import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button';
import {addUserAPI} from '../api/addUserApi'
import { nanoid } from 'nanoid';
import { Stack } from '@mui/system';
import { storage } from '../firebase.config'
import { Typography,TextField } from '@mui/material';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage'
import {useAppDispatch,useAppSelector} from '../store';
import {createUserAction} from '../redux/userAction'
import { getUserAPI } from '../api/getUserApi';

const AddUser = ({onClose}) => {
  const dispatch = useAppDispatch()

  const [userInfo,setUserInfo] = useState({
    name:'',
    email:'',
    phone:''
  })

  const [image, setImage] = useState(null)

  const changeUserInfo = (e) => { 
    const {name,value} = e.target
    setUserInfo({...userInfo,[name]:value})
    }

  const handleUploadImage = (e) => {
    const {files} = e.target;
    if(files?.length) {
      setImage(files[0])
    }
  }

 


  const validateUserInput = async () => {
    const {name,email,phone} = userInfo
    if(!name || !email || !phone ) {
      alert('Please Type User Info')
      return
    } 
    if(!image) {
      alert('please upload file');
      return;
    }
    try {
      const currentTime = Date.now();
      const imgPath = `images/${image.name}_${currentTime}`
      const imageRef = ref(storage,imgPath);
      await uploadBytes(imageRef,image)
      const tempimageUrl = await getDownloadURL(imageRef)

      const newUser = {
        id: nanoid(),
        name:userInfo.name,
        phone:userInfo.phone,
        email:userInfo.email,
        imageUrl:tempimageUrl,
        imagePath: imgPath,
        timeCreated: currentTime
       };

      await addUserAPI(newUser);
      onClose();
      const result = await getUserAPI();
      dispatch(createUserAction(result))
      // setUserList({...userList, user:result, loading:false})

    } catch(err) {
      console.log(err)
    }
   
  }

  
  return (
    <>
      <Stack>
        <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'5px'}>Name</Typography>
        <TextField type='text' name="name" value={userInfo.name} onChange={changeUserInfo} size='small' sx = {{width:'100%',height:'34px',mb:'20px'}}/>
        <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'5px'}>Email</Typography>
        <TextField type='text' name="email" value={userInfo.email} onChange={changeUserInfo} size='small' sx = {{width:'100%',height:'34px',mb:'20px'}}/>
        <Typography  sx={{color:'#344054',fontSize:'13px'}} mb={'5px'}>Phone</Typography>
        <TextField type='text' name="phone" value={userInfo.phone} onChange={changeUserInfo} size='small' sx = {{width:'100%',height:'34px',mb:'20px'}}/>
        <Typography  sx={{color:'#344054',fontSize:'13px'}} mb={'5px'}>Profile Picture</Typography>
        <TextField type='file'  onChange={handleUploadImage} size='small' sx = {{width:'100%',height:'34px',mb:'20px'}}/>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" 
                  sx={{bgcolor:'#FFC401',
                    '&:hover': {
                        borderColor: '#436AE9', // Keep the same color on hover
                        backgroundColor: '#E6B337',
                        color:'#FFFFFF',
                        borderWidth: '2px', // Ensure the border width stays the same on hover
                         },
                  }} 
                  onClick={()=>{validateUserInput()}}>
                  Add User</Button>
          <Button variant="outlined"
                  sx={{borderColor:'#FFC401',
                       color:'#FFC401',
                       '&:hover': {
                        borderColor: '#FFC401', // Keep the same color on hover
                        backgroundColor: '#F0F0F0',
                     // Ensure the border width stays the same on hover
                         } 
                  }}
                   onClick={onClose}>Cancel</Button>

        </Stack>
     
       
      </Stack>
     
    </>
  )
}

export default AddUser