import React from 'react';
import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import CoverBanner from './CoverBanner';

const Header = ({
  avaImage,
  coverBanner,
  onAvatarUpload,
  handleCoverBanner,
  uploadCoverBanner,
  setUploadCoverBannerisOpen,
}) => (
  <Box
    sx={{
      height: '300px',
      backgroundImage: coverBanner
        ? `url('${coverBanner}')`
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
      <CoverBanner
        handleCoverBanner={handleCoverBanner}
        setUploadCoverBannerisOpen={setUploadCoverBannerisOpen}
        uploadCoverBanner={uploadCoverBanner}
        image={coverBanner}
      />
    </Container>
  </Box>
);

Header.propTypes = {
  avaImage: PropTypes.string,
  setAvaImage: PropTypes.func,
  coverBanner: PropTypes.string,
  onClickSaveCoverBanner: PropTypes.func,
  uploadCoverBanner: PropTypes.bool,
  setUploadCoverBannerisOpen: PropTypes.func,
};

export default Header;
