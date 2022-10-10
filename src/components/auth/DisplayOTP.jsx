import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import OtpInput from 'react-otp-input';
import PropTypes from 'prop-types';
import useResponsive from '../../lib/useResponsive';

const DisplayOTP = ({
  OTP,
  setOTP,
  setDisplayOTPisOpen,
  onConfirmOTP,
  onResendOTP,
}) => {
  const { isMobile } = useResponsive();

  return (
    <>
      <Box
        onClick={() => {
          setDisplayOTPisOpen(false);
          setOTP(null);
        }}
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
        We've sent you an OTP number to your mobile. Please kindly check and
        match it here:
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
        onClick={() => onConfirmOTP(OTP)}
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
      <Box onClick={() => onResendOTP(OTP)}>
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
  );
};

DisplayOTP.propTypes = {
  OTP: PropTypes.string,
  setOTP: PropTypes.func,
  setDisplayOTPisOpen: PropTypes.func,
  onConfirmOTP: PropTypes.func,
  onResendOTP: PropTypes.func,
};

export default DisplayOTP;
