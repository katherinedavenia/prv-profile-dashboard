import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const AlbumSection = ({
  albumImage = 'https://s3.r29static.com/bin/entry/c58/960xbm,70/1591126/image.jpg',
}) => (
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
      <Box
        sx={{
          aspectRatio: '1 !important',
          height: '100%',
          borderRadius: '8px',
          backgroundImage: `url('${albumImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          aspectRatio: '1 !important',
          height: '100%',
          borderRadius: '8px',
          backgroundImage: `url('${albumImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          aspectRatio: '1 !important',
          height: '100%',
          borderRadius: '8px',
          backgroundImage: `url('${albumImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          aspectRatio: '1 !important',
          height: '100%',
          borderRadius: '8px',
          backgroundImage: `url('${albumImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          aspectRatio: '1 !important',
          height: '100%',
          borderRadius: '8px',
          backgroundImage: `url('${albumImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fafafa',
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
    </Box>
  </Box>
);

export default AlbumSection;
