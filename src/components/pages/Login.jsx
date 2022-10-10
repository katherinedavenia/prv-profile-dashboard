import React from 'react';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useLogin } from '../../lib/authHooks';

const AuthContainer = dynamic(() => import('../auth/AuthContainer'), {
  ssr: false,
});

const DisplayLogin = dynamic(() => import('../auth/DisplayLogin'), {
  ssr: false,
});

const Login = () => {
  const router = useRouter();
  const login = useLogin();

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
  });

  const onLogin = async () => {
    try {
      await login.mutateAsync({
        phone: formik.values.phone,
        password: formik.values.password,
      });
      alert('Login Successful! Welcome to your Dashboard');
      router.push('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <AuthContainer>
      <DisplayLogin formik={formik} onLogin={onLogin} />
    </AuthContainer>
  );
};
export default Login;
