import React from 'react';
import {
  Box, Button, Container, Typography
} from '@mui/material';
import { AccountCircle, AutoAwesome, Notifications } from '@mui/icons-material';
import PropTypes from 'prop-types';

const Navbar = ({
  name,
  bgImage,
  profileIconisOpen,
  setProfileIconisOpen,
  notificationIconisOpen,
  setNotificationIconisOpen,
}) => (
  <Box
    sx={{
      backgroundColor: bgImage ? 'transparent' : '#f5f5f5',
      borderBottom: bgImage ? 'transparent' : '2px solid #e8e8e8',
      position: 'absolute',
      width: '100%',
      zIndex: 15,
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: { xs: '80px', sm: '60px' },
          px: { sm: '24px', lg: '50px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: '#475266',
              fontSize: { xs: '18px', sm: '22px' },
              pr: { xs: '60px', sm: 0 },
            }}
          >
            {name ? `Welcome, ${name}!` : 'Welcome!'}
            <AutoAwesome
              sx={{
                ml: '7px',
                width: '24px',
                height: 'auto',
                color: '#475266',
              }}
            />
          </Typography>
        </Box>
        <Box
          sx={{ position: 'relative', display: 'flex', flexDirection: 'row' }}
        >
          <Box
            onClick={() => {
              setNotificationIconisOpen(!notificationIconisOpen);
              setProfileIconisOpen(false);
            }}
          >
            <Notifications
              sx={{
                cursor: 'pointer',
                width: '32px',
                height: 'auto',
                transform: 'translateY(2px)',
                color: '#475266',
                mr: { xs: '12px', sm: '24px' },
                transition: '300ms',
                '&:hover': {
                  opacity: 0.7,
                  transform: 'rotate(20deg)',
                },
              }}
            />
          </Box>
          <Box
            onClick={() => {
              setProfileIconisOpen(!profileIconisOpen);
              setNotificationIconisOpen(false);
            }}
          >
            <AccountCircle
              sx={{
                cursor: 'pointer',
                width: '32px',
                height: 'auto',
                transform: 'translateY(2px)',
                color: '#475266',
                transition: '300ms',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            />
          </Box>
          {profileIconisOpen && (
            <Box sx={{ position: 'absolute', right: 0, top: '40px' }}>
              <Button
                sx={{
                  fontSize: '14px',
                  backgroundColor: 'white',
                  p: '10px',
                  width: '120px',
                  textAlign: 'center',
                  border: '1px solid gainsboro',
                  borderRadius: 0,
                  color: '#000',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'whitesmoke',
                  },
                }}
              >
                Sign Out
              </Button>
            </Box>
          )}
          {notificationIconisOpen && (
            <Box sx={{ position: 'absolute', right: '60px', top: '40px' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  backgroundColor: 'white',
                  p: '14px',
                  width: '400px',
                  textAlign: 'center',
                  border: '1px solid gainsboro',
                  borderBottom: '1px solid gainsboro',
                }}
              >
                Notifications are not currently available 😢
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  </Box>
);

Navbar.propTypes = {
  name: PropTypes.string,
  bgImage: PropTypes.string,
  profileIconisOpen: PropTypes.bool,
  setProfileIconisOpen: PropTypes.func,
  notificationIconisOpen: PropTypes.bool,
  setNotificationIconisOpen: PropTypes.func,
};

export default Navbar;
