import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { AddCircle } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const AlbumSection = ({ albumImages, onAlbumUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (images) => {
      onAlbumUpload(images);
    },
  });

  return (
    <Box sx={{ pb: '70px' }}>
      <Typography
        sx={{
          fontSize: { xs: '22px', sm: '24px' },
          fontWeight: 600,
          mb: '16px',
        }}
      >
        Photo Album
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: { xs: '14px', sm: '16px' },
        }}
      >
        {albumImages?.map((item) => (
          <Box
            sx={{
              aspectRatio: '1 !important',
              height: '100%',
              borderRadius: '8px',
              backgroundImage: `url('${item}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Box
            onClick={() => onAlbumUpload}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'whitesmoke',
              aspectRatio: '1 !important',
              height: '100%',
              borderRadius: '8px',
            }}
          >
            <Button
              sx={{
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                width: '50px',
                height: '50px',
                borderRadius: '50px',
              }}
            >
              <AddCircle
                sx={{
                  height: '60px',
                  width: 'auto',
                  color: 'rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    color: 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              />
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

AlbumSection.propTypes = {
  albumImages: PropTypes.arrayOf(),
  onAlbumUpload: PropTypes.func,
};

export default AlbumSection;
