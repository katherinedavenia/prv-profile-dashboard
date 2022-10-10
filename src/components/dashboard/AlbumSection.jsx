import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const AlbumSection = ({ albumImages }) => (
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
    </Box>
  </Box>
);

AlbumSection.propTypes = {
  albumImages: PropTypes.arrayOf(),
};

export default AlbumSection;
