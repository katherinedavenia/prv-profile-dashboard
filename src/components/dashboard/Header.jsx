import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import PropTypes from 'prop-types';
import useResponsive from '../../lib/useResponsive';

const Header = ({
  avaImage,
  setAvaImage,
  bgImage,
  setBgImage,
  uploadBgImageisOpen,
  setUploadBgImageisOpen,
}) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Box
      sx={{
        height: '300px',
        backgroundImage: bgImage
          ? `url('${bgImage}')`
          : 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundImage: avaImage
              ? `url('${avaImage}')`
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
          }}
        >
          {!avaImage && (
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
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg, image/jpg"
            style={{
              width: isMobile ? '150px' : isTablet ? '180px' : '200px',
              height: isMobile ? '150px' : isTablet ? '180px' : '200px',
              borderRadius: '100px',
              position: 'absolute',
              opacity: 0,
              cursor: 'pointer',
              zIndex: 10,
            }}
            onChange={(e) => {
              if (e.target.files?.length !== 0) {
                setAvaImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </Box>
        <Box
          onClick={() => setUploadBgImageisOpen(!uploadBgImageisOpen)}
          sx={{
            position: 'absolute',
            bottom: '15px',
            right: { xs: '16px', sm: '44px' },
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            opacity: { xs: 1, lg: bgImage ? 0 : 1 },
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
            <input
              type="file"
              id="cover-banner"
              name="cover-banner"
              accept="image/png, image/jpeg, image/jpg"
              style={{
                height: '100%',
                width: '300px',
                position: 'absolute',
                opacity: 0,
                cursor: 'pointer',
              }}
              onChange={(e) => {
                if (e.target.files?.length !== 0) {
                  setBgImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

Header.propTypes = {
  avaImage: PropTypes.string,
  setAvaImage: PropTypes.func,
  bgImage: PropTypes.string,
  setBgImage: PropTypes.func,
  uploadBgImageisOpen: PropTypes.bool,
  setUploadBgImageisOpen: PropTypes.func,
};

export default Header;
