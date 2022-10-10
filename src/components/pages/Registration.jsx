/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useSendOTP, useMatchOTP, useRegister } from '../../lib/authHooks';

const AuthContainer = dynamic(() => import('../auth/AuthContainer'), {
  ssr: false,
});

const DisplayRegister = dynamic(() => import('../auth/DisplayRegister'), {
  ssr: false,
});

const DisplayOTP = dynamic(() => import('../auth/DisplayOTP'), {
  ssr: false,
});

const Registration = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState(null);
  const [displayOTPisOpen, setDisplayOTPisOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const sendOTP = useSendOTP();
  const matchOTP = useMatchOTP();
  const register = useRegister();

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
      country: '',
      latlong: '1',
      deviceToken: '1',
      deviceType: 0,
    },
  });

  const onRegister = async () => {
    try {
      await register.mutateAsync({
        phone: formik.values.phone,
        password: formik.values.password,
        country: formik.values.country,
      });
      setDisplayOTPisOpen(true);

      const data = await sendOTP.mutateAsync(formik.values.phone);
      setUserData(data?.user);
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const onConfirmOTP = async (otp) => {
    try {
      await matchOTP.mutateAsync({
        userId: userData?.id,
        otpCode: otp,
      });
      router.push('/');
      toast.success('Registration Successful! Welcome to your Dashboard', {
        position: 'top-right',
        icon: '🥳',
      });
    } catch (e) {
      setOTP(null);
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  const onResendOTP = async (otp) => {
    try {
      await matchOTP.mutateAsync(userData.id, otp);
      toast.info('We have sent you another OTP code to your mobile', {
        position: 'top-right',
        icon: '🙏🏻',
      });
    } catch (e) {
      toast.error(e.message || 'Server Error', {
        position: 'top-right',
        icon: '😵',
      });
    }
  };

  return (
    <AuthContainer>
      {!displayOTPisOpen ? (
        <DisplayRegister formik={formik} onRegister={onRegister} />
      ) : (
        <DisplayOTP
          OTP={OTP}
          setOTP={setOTP}
          setDisplayOTPisOpen={setDisplayOTPisOpen}
          onConfirmOTP={onConfirmOTP}
          onResendOTP={onResendOTP}
        />
      )}
    </AuthContainer>
  );
};

export default Registration;
