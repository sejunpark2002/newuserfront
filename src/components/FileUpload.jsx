import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Typography, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import axios from 'axios';
// import '../App.css';

const FileUpload = () => {
  const fileInputRef = React.createRef();
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [currentfile, setCurrentFile] = useState('');
  const [filesize, setFileSize] = useState(0);
  const [filelist, setFileList] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = async () => {
    if (uploaded) {
      clearFileInput();
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/', filelist, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });
    } catch (error) {
      setUploaded(false);
    }
  };

  // Add uploaded file to an Array
  const addFile = (newFile) => {
    setFileList((prevFiles) => [...prevFiles, newFile]);
  };

  // Handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const name = file.name.split('.')[0];

      addFile({
        name: name,
      });
    }
    console.log(filelist);
    handleUpload();
  };
  // Trigger file input
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInputRef.current.files = files;
      handleFileChange({ target: { files } });
    }
  };

  // Function to clear file state
  const clearFileInput = () => {
    fileInputRef.current.value = '';
    setProgress(0);
  };
  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Box
          height={'100px'}
          my={4}
          display="flex"
          alignItems="center"
          justifyContent={'center'}
          boxShadow={4}
          gap={4}
          p={2}
          sx={{ border: '2px solid #7F56D9', borderRadius: '12px' }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: '100vh' }}
          >
            <CloudUploadOutlinedIcon
              sx={{ border: '1px solid #EAECF0', borderRadius: '8px' }}
            />
            <Stack direction="row">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden-input"
                onChange={handleFileChange}
              />
              <Link
                onClick={handleClick}
                type="file"
                component="button"
                underline="none"
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6941C6',
                  fontFamily: 'Inter',
                  marginBottom: '4px',
                  marginRight: '2px',
                }}
              >
                Click to upload
              </Link>

              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: 'regular',
                  color: '#475467',
                  fontFamily: 'Inter',
                  marginBottom: '4px',
                }}
              >
                or drag and drop
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default FileUpload;

// https://www.youtube.com/watch?v=edR6Az7shv8
