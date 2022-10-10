import { AddPhotoAlternate } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import useResponsive from '../../lib/useResponsive';

const Avatar = ({ image, onUpload }) => {
  const { isMobile, isTablet } = useResponsive();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (images) => {
      onUpload(images);
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        sx={{
          backgroundImage: image
            ? `url('${image}')`
            : "url('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/155/monkey-face_1f435.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'absolute',
          bottom: { xs: '-70px', sm: '-80px', md: '-100px' },
          left: { xs: '32px', sm: '48px' },
          width: isMobile ? '150px' : isTablet ? '180px' : '200px',
          height: isMobile ? '150px' : isTablet ? '180px' : '200px',
          borderRadius: '100px',
          cursor: 'pointer',
          border: '5px solid #fff',
          zIndex: 15,
        }}
      >
        {!image && (
          <AddPhotoAlternate
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              height: '50px',
              width: 'auto',
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          />
        )}
      </Box>
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  onUpload: PropTypes.func,
};

export default Avatar;
