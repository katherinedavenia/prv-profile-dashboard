import React from 'react';
import { Box, Container, TextField, Typography, Button } from '@mui/material';

const AuthContainer = ({ children }) => (
  <Box
    sx={{
      backgroundImage: 'linear-gradient(90deg, #cce5cf 0%, #c3cfe5 100%)',
      height: '100vh',
    }}
  >
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '500px', md: '800px' },
            height: { xs: '500px', lg: '500px' },
            p: { xs: '14px', sm: '18px', md: '24px' },
            backgroundColor: '#f5f5f5',
            borderRadius: '12px',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  </Box>
);
export default AuthContainer;
