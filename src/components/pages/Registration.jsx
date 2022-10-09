/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import {
  ArrowBack,
  AutoAwesome,
  CheckCircleOutline,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import OtpInput from 'react-otp-input';
import useResponsive from '../../lib/useResponsive';

const Registration = () => {
  const { isMobile } = useResponsive();
  const router = useRouter();
  const [OTP, setOTP] = useState(null);
  const [displayOTP, setDisplayOTP] = useState(false);

  const onRegisterButtonClick = () => {
    setDisplayOTP(true);
  };

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
              position: 'relative',
            }}
          >
            {!displayOTP ? (
              <>
                <Typography
                  sx={{
                    fontSize: { xs: '24px', sm: '26px', md: '28px' },
                    fontWeight: 600,
                    mb: '50px',
                    color: '#475266',
                  }}
                >
                  Register Now!
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
                <Box component="form" noValidate autoComplete="off">
                  <div>
                    <TextField
                      fullWidth
                      required
                      id="standard-phone-number"
                      label={
                        <span style={{ letterSpacing: '3px' }}>
                          PHONE NUMBER
                        </span>
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
                      required
                      id="standard-password-input"
                      label={
                        <span style={{ letterSpacing: '3px' }}>PASSWORD</span>
                      }
                      type="password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      sx={{ mb: '20px' }}
                    />
                    <TextField
                      fullWidth
                      required
                      id="standard-country"
                      label={
                        <span style={{ letterSpacing: '3px' }}>
                          COUNTRY OF ORIGIN
                        </span>
                      }
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </div>
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: 300,
                    mt: '10px',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircleOutline
                    sx={{
                      width: { xs: '15px', sm: '20px' },
                      height: 'auto',
                      color: '#475266',
                      transform: {
                        xs: 'translateY(3px)',
                        sm: 'translateY(5px)',
                      },
                      mr: '7px',
                    }}
                  />
                  I've read and agreed to the Terms & Conditions
                </Typography>
                <Button
                  onClick={onRegisterButtonClick}
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
                  Register
                </Button>
                <Box onClick={() => router.push('/login')}>
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
                    Already have an account? Click here!
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box
                  onClick={() => setDisplayOTP(false)}
                  sx={{
                    position: 'absolute',
                    top: '25px',
                    left: '30px',
                  }}
                >
                  <ArrowBack
                    sx={{
                      width: '30px',
                      height: 'auto',
                      color: '#475266',
                      '&:hover': {
                        opacity: 0.7,
                        cursor: 'pointer',
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: '18px', sm: '22px' },
                    fontWeight: 600,
                    mt: '14px',
                    mb: '20px',
                    textAlign: 'center',
                    px: { xs: '10px', sm: '70px', md: '100px' },
                  }}
                >
                  We've sent you an OTP number to your mobile. Please kindly
                  check and match it here:
                </Typography>
                <OtpInput
                  value={OTP}
                  onChange={(value) => setOTP(value)}
                  numInputs={4}
                  separator={<span style={{ margin: '0 7px' }} />}
                  inputStyle={{
                    width: isMobile ? '50px' : '70px',
                    height: isMobile ? '70px' : '90px',
                    backgroundColor: 'white',
                    border: '1px solid gainsboro',
                    borderRadius: '4px',
                    fontSize: '38px',
                    color: '#000',
                  }}
                />
                <Button
                  onClick={onRegisterButtonClick}
                  variant="contained"
                  sx={{
                    mt: '60px',
                    color: '#475266',
                    backgroundColor: '#cce3d3',
                    '&:hover': {
                      backgroundColor: '#b7ccbd',
                    },
                  }}
                >
                  Confirm OTP
                </Button>
                <Box>
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
                    Didn't receive any message? Resend OTP Number
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Registration;
