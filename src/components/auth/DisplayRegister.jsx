import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AutoAwesome, CheckCircleOutline } from '@mui/icons-material';
import { useRouter } from 'next/router';

const DisplayRegister = ({ formik, onRegister }) => {
  const router = useRouter();

  return (
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
            name="standard-phone-number"
            label={<span style={{ letterSpacing: '3px' }}>PHONE NUMBER</span>}
            type="number"
            InputLabelProps={{
              shrink: true,
              inputMode: 'numeric',
              pattern: '[0-9]*',
            }}
            variant="standard"
            sx={{ mb: '20px' }}
            placeholder="62"
            onChange={formik.handleChange('phone')}
            value={formik.values.phone}
          />
          <TextField
            fullWidth
            required
            id="standard-password-input"
            name="standard-password-input"
            label={<span style={{ letterSpacing: '3px' }}>PASSWORD</span>}
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            sx={{ mb: '20px' }}
            onChange={formik.handleChange('password')}
            value={formik.values.password}
          />
          <TextField
            fullWidth
            required
            id="standard-country"
            name="standard-country"
            label={
              <span style={{ letterSpacing: '3px' }}>COUNTRY OF ORIGIN</span>
            }
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={formik.handleChange('country')}
            value={formik.values.country}
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
        disabled={
          !formik.values.phone ||
          !formik.values.password ||
          !formik.values.country
        }
        onClick={() => onRegister()}
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
  );
};

export default DisplayRegister;
