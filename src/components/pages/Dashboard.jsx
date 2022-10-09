import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../Navbar'), {
  ssr: false,
});

const Footer = dynamic(() => import('../Footer'), {
  ssr: false,
});

const Header = dynamic(() => import('../dashboard/Header'), {
  ssr: false,
});

const BiodataSection = dynamic(() => import('../dashboard/BiodataSection'), {
  ssr: false,
});

const PortfolioSection = dynamic(
  () => import('../dashboard/PortfolioSection'),
  {
    ssr: false,
  },
);

const AlbumSection = dynamic(() => import('../dashboard/AlbumSection'), {
  ssr: false,
});

const Body = ({ children }) => (
  <Box>
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: '#fff',
          px: { xs: '16px', sm: '20px' },
          borderLeft: '2px solid #e8e8e8',
          borderRight: '2px solid #e8e8e8',
          borderBottom: '2px solid #e8e8e8',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          mb: '50px',
        }}
      >
        {children}
      </Box>
    </Container>
  </Box>
);

const Dashboard = () => {
  const [bgImage, setBgImage] = useState('');
  const [uploadBgImageisOpen, setUploadBgImageisOpen] = useState(false);
  const [avaImage, setAvaImage] = useState('');
  const [profileIconisOpen, setProfileIconisOpen] = useState(false);
  const [notificationIconisOpen, setNotificationIconisOpen] = useState(false);

  const onContainerClick = () => {
    if (uploadBgImageisOpen) {
      setUploadBgImageisOpen(false);
    }
    if (profileIconisOpen) {
      setProfileIconisOpen(false);
    }
    if (notificationIconisOpen) {
      setNotificationIconisOpen(false);
    }
  };

  return (
    <Box onClick={onContainerClick}>
      <Navbar
        avaImage={bgImage}
        profileIconisOpen={profileIconisOpen}
        setProfileIconisOpen={setProfileIconisOpen}
        notificationIconisOpen={notificationIconisOpen}
        setNotificationIconisOpen={setNotificationIconisOpen}
      />
      <Header
        avaImage={avaImage}
        setAvaImage={setAvaImage}
        bgImage={bgImage}
        setBgImage={setBgImage}
        uploadBgImageisOpen={uploadBgImageisOpen}
        setUploadBgImageisOpen={setUploadBgImageisOpen}
      />
      <Body>
        <BiodataSection />
        <PortfolioSection />
        <AlbumSection />
      </Body>
      <Footer />
    </Box>
  );
};

export default Dashboard;
