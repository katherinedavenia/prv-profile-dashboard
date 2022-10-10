import React from 'react';
import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Banner from './Banner';

const Header = ({
  avaImage,
  bannerImage,
  onAvatarUpload,
  onBannerUpload,
  uploadBanner,
  setUploadBannerisOpen,
}) => (
  <Box
    sx={{
      height: '300px',
      backgroundImage: bannerImage
        ? `url('${bannerImage}')`
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
      <Avatar onUpload={onAvatarUpload} image={avaImage} />
      <Banner
        onUpload={onBannerUpload}
        setUploadBannerisOpen={setUploadBannerisOpen}
        uploadBanner={uploadBanner}
        image={bannerImage}
      />
    </Container>
  </Box>
);

Header.propTypes = {
  avaImage: PropTypes.string,
  bannerImage: PropTypes.string,
  onAvatarUpload: PropTypes.func,
  onBannerUpload: PropTypes.func,
  uploadBanner: PropTypes.bool,
  setUploadBannerisOpen: PropTypes.func,
};

export default Header;
