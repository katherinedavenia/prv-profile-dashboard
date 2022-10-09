import React from 'react';
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  return (
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
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '24px', sm: '26px', md: '28px' },
                fontWeight: 600,
                mb: '50px',
                color: '#475266',
                textAlign: 'center',
              }}
            >
              It's good to see you back!
              <br />
              Login to your profile now
              <AutoAwesome
                sx={{
                  width: '26px',
                  height: 'auto',
                  color: '#475266',
                  transform: 'translateY(3px)',
                  ml: '7px',
                }}
              />
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  fullWidth
                  required
                  id="standard-phone-number"
                  label={
                    <span style={{ letterSpacing: '3px' }}>PHONE NUMBER</span>
                  }
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                  }}
                  variant="standard"
                  sx={{ mb: '20px' }}
                />
                <TextField
                  fullWidth
                  id="standard-password-input"
                  label={<span style={{ letterSpacing: '3px' }}>PASSWORD</span>}
                  type="password"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mb: '20px' }}
                  variant="standard"
                />
              </div>
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: '30px',
                color: '#475266',
                backgroundColor: '#cce3d3',
                '&:hover': {
                  backgroundColor: '#b7ccbd',
                },
              }}
            >
              Login
            </Button>
            <Box onClick={() => router.push('/registration')}>
              <Typography
                sx={{
                  cursor: 'pointer',
                  fontSize: { xs: '14px', sm: '16px' },
                  fontWeight: 300,
                  mt: '14px',
                  '&:hover': {
                    color: '#b7ccbd',
                    textDecoration: 'underline',
                  },
                }}
              >
                Don't have an account? Click here!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
