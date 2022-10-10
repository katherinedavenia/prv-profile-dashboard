/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
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
      alert(e.message);
    }
  };

  const onConfirmOTP = async (otp) => {
    try {
      await matchOTP.mutateAsync({
        userId: userData?.id,
        otpCode: otp,
      });
      Cookies.set('accessToken', userData?.access_token);
      router.push('/');
      alert('Register Successful! Welcome to your Dashboard');
    } catch (e) {
      setOTP(null);
      alert(e.message);
    }
  };

  const onResendOTP = async (otp) => {
    try {
      await matchOTP.mutateAsync(userData.id, otp);
      alert('We have sent you another OTP code to your mobile');
    } catch (e) {
      alert(e.message);
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
