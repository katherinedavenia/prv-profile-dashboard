import React, { useState } from 'react';
import { Box, Container, LinearProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { useFormik } from 'formik';
import {
  useAddBiodata,
  useAddCoverBanner,
  useAddEducation,
  useAddExperience,
  useAddProfilePicture,
  useGetProfile,
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
  const [uploadCoverBannerisOpen, setUploadCoverBannerisOpen] = useState(false);
  const [profileIconisOpen, setProfileIconisOpen] = useState(false);
  const [notificationIconisOpen, setNotificationIconisOpen] = useState(false);

  const { data: profile, isLoading, refetch } = useGetProfile();

  const addEducation = useAddEducation();
  const addExperience = useAddExperience();
  const addBiodata = useAddBiodata();
  const addCoverBanner = useAddCoverBanner();
  const addProfilePicture = useAddProfilePicture();

  const onContainerClick = () => {
    if (uploadCoverBannerisOpen) {
      setUploadCoverBannerisOpen(false);
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
      coverBanner: null,
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
      alert(e.message);
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
      alert(e.message);
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
      alert(e.message);
    }
  };

  const onAvatarUpload = async (images) => {
    try {
      await addProfilePicture.mutateAsync({
        image: images[0],
      });
      refetch();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleCoverBanner = async (images) => {
    try {
      await addCoverBanner.mutateAsync({
        image: images[0],
      });
      refetch();
    } catch (e) {
      alert(e.message);
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
            avaImage={profile?.user?.user_picture?.picture.url}
            coverBanner={profile?.user?.cover_picture?.url}
            uploadCoverBannerisOpen={uploadCoverBannerisOpen}
            setUploadCoverBannerisOpen={setUploadCoverBannerisOpen}
            onAvatarUpload={onAvatarUpload}
            handleCoverBanner={handleCoverBanner}
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
            />
          </Body>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Dashboard;
