import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#dbf3f3',
      borderTop: '2px solid #e8e8e8',
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100px',
          px: { sm: '24px', lg: '50px' },
        }}
      >
        <Box>a</Box>
        <Box onClick={() => window.open('https://docs.nextjs.org/')}>
          <Typography
            sx={{
              cursor: 'pointer',
              fontWeight: 300,
              color: '#475266',
              fontSize: '18px',
              '&:hover': {
                color: '#000',
              },
            }}
          >
            Powered by Next.js
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
