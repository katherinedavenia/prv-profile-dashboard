import React from 'react';
import {
  Box, Button, TextField, Typography
} from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const DisplayLogin = ({ formik, onLogin }) => {
  const router = useRouter();

  return (
    <>
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
      <Box component="form" noValidate autoComplete="off">
        <div>
          <TextField
            fullWidth
            required
            id="standard-phone-number"
            label={<span style={{ letterSpacing: '3px' }}>PHONE NUMBER</span>}
            type="number"
            InputLabelProps={{
              shrink: true,
              inputMode: 'numeric',
              pattern: '[0-9]*',
            }}
            variant="standard"
            sx={{ mb: '20px' }}
            onChange={formik.handleChange('phone')}
            value={formik.values.phone}
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
            onChange={formik.handleChange('password')}
            value={formik.values.password}
          />
        </div>
      </Box>
      <Button
        disabled={!formik.values.phone || !formik.values.password}
        onClick={() => onLogin()}
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
    </>
  );
};

DisplayLogin.propTypes = {
  formik: PropTypes.shape(),
  onLogin: PropTypes.func,
};

export default DisplayLogin;
