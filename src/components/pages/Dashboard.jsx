import React, { useState } from 'react';
import { Box, Container, LinearProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  useAddBanner,
  useAddBiodata,
  useAddEducation,
  useAddExperience,
  useAddProfilePicture,
  useGetProfile,
  useAddAlbumImage
} from '../../lib/profileHooks';
import Header from '../dashboard/Header';
import BiodataSection from '../dashboard/BiodataSection';
import PortfolioSection from '../dashboard/PortfolioSection';
import AlbumSection from '../dashboard/AlbumSection';

const Navbar = dynamic(() => import('../Navbar'), {
  ssr: false,
});

const Footer = dynamic(() => import('../Footer'), {
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

Body.propTypes = {
  children: PropTypes.node,
};

const LoadingScreen = () => (
  <Box>
    <Container
      maxWidth="xl"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LinearProgress style={{ width: '50%' }} />
    </Container>
  </Box>
);

const Dashboard = () => {
  const [uploadBannerisOpen, setUploadBannerisOpen] = useState(false);
  const [profileIconisOpen, setProfileIconisOpen] = useState(false);
  const [notificationIconisOpen, setNotificationIconisOpen] = useState(false);

  const { data: profile, isLoading, refetch } = useGetProfile();

  const addEducation = useAddEducation();
  const addExperience = useAddExperience();
  const addBiodata = useAddBiodata();
  const addBanner = useAddBanner();
  const addProfilePicture = useAddProfilePicture();
  const addAlbumImage = useAddAlbumImage();

  const onContainerClick = () => {
    if (uploadBannerisOpen) {
      setUploadBannerisOpen(false);
    }
    if (profileIconisOpen) {
      setProfileIconisOpen(false);
    }
    if (notificationIconisOpen) {
      setNotificationIconisOpen(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: profile?.user?.name,
      bio: profile?.user?.bio,
      birthday: profile?.user?.birthday,
      hometown: profile?.user?.hometown,
      gender: profile?.user?.gender || 0,
      companyName: profile?.user?.company_name,
      startingFrom: profile?.user?.starting_from,
      endingIn: profile?.user?.ending_in,
      schoolName: profile?.user?.school_name,
      graduationTime: profile?.user?.graduation_time,
    },
  });

  const onSaveExperience = async () => {
    try {
      await addExperience.mutateAsync({
        companyName: formik.values.companyName,
        startingFrom: formik.values.startingFrom,
        endingIn: formik.values.endingIn,
      });
      refetch();
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const onSaveEducation = async () => {
    try {
      await addEducation.mutateAsync({
        schoolName: formik.values.schoolName,
        graduationTime: formik.values.graduationTime,
      });
      refetch();
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const [openEditBiodata, setOpenEditBiodata] = useState(false);

  const onBiodataSave = async () => {
    try {
      await addBiodata.mutateAsync({
        name: formik.values.name,
        bio: formik.values.bio,
        birthday: formik.values.birthday,
        hometown: formik.values.hometown,
        gender: formik.values.gender,
      });
      refetch();
      setOpenEditBiodata(false);
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const onAvatarUpload = async (images) => {
    try {
      await addProfilePicture.mutateAsync({
        image: images[0],
      });
      refetch();
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const onBannerUpload = async (images) => {
    try {
      await addBanner.mutateAsync({
        image: images[0],
      });
      refetch();
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const onAlbumUpload = async (images) => {
    try {
      await addAlbumImage.mutateAsync({
        image: images[0],
      });
      refetch();
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  return (
    <Box onClick={onContainerClick}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar
            name={profile.user.name}
            profileIconisOpen={profileIconisOpen}
            setProfileIconisOpen={setProfileIconisOpen}
            notificationIconisOpen={notificationIconisOpen}
            setNotificationIconisOpen={setNotificationIconisOpen}
          />
          <Header
            bannerImage={profile?.user?.cover_picture?.url}
            uploadBannerisOpen={uploadBannerisOpen}
            setUploadBannerisOpen={setUploadBannerisOpen}
            onBannerUpload={onBannerUpload}
            avaImage={profile?.user?.user_picture?.picture.url}
            onAvatarUpload={onAvatarUpload}
          />
          <Body>
            <BiodataSection
              formik={formik}
              name={profile.user.name}
              hometown={profile.user.hometown}
              birthday={profile.user.birthday}
              gender={profile.user.gender}
              bio={profile.user.bio}
              onBiodataSave={onBiodataSave}
              setOpenEditBiodata={setOpenEditBiodata}
              openEditBiodata={openEditBiodata}
            />
            <PortfolioSection
              formik={formik}
              experience={profile?.user?.career}
              education={profile?.user?.education}
              onSaveEducation={onSaveEducation}
              onSaveExperience={onSaveExperience}
            />
            <AlbumSection
              albumImages={profile.user.user_pictures.map(
                (userPicture) => userPicture.picture.url,
              )}
              onAlbumUpload={onAlbumUpload}
            />
          </Body>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Dashboard;
