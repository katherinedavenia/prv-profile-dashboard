import { AddPhotoAlternate } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

const Banner = ({
  image, onUpload, setUploadBannerisOpen, uploadBanner
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      onUpload(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        onClick={() => setUploadBannerisOpen(!uploadBanner)}
        sx={{
          position: 'absolute',
          bottom: '15px',
          right: { xs: '16px', sm: '44px' },
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          opacity: { xs: 1, lg: image ? 0 : 1 },
          '&:hover': {
            opacity: 1,
            transition: '200ms',
          },
        }}
      >
        <Button
          sx={{
            border: '2px solid rgba(255, 255, 255, 0.8)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)',
            p: { xs: '3px 7px', sm: '3px 14px' },
            borderRadius: '6px',
            fontSize: { xs: '14px', sm: '16px' },
            fontWeight: 400,
            lineHeight: 0.9,
            width: 'fit-content',
            textTransform: 'none',
            overflow: 'hidden',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <AddPhotoAlternate sx={{ height: '30px', mr: '5px' }} />
          add cover
        </Button>
      </Box>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string,
  onUpload: PropTypes.func,
  setUploadBannerisOpen: PropTypes.func,
  uploadBanner: PropTypes.bool,
};

export default Banner;
