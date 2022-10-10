import { useMutation } from '@tanstack/react-query';
import api from './api';
import storage from './storage';

export const useSendOTP = () => {
  const mutation = useMutation(async (phone) => {
    const formData = new FormData();
    formData.append('phone', phone);

    const { data } = await api.post('/api/v1/register/otp/request', formData);
    return data;
  });
  return mutation;
};

export const useMatchOTP = () => {
  const mutation = useMutation(async ({ userId, otpCode }) => {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('otp_code', otpCode);

    await api.post('/api/v1/register/otp/match', formData);
  });
  return mutation;
};

export const useRegister = () => {
  const mutation = useMutation(
    async ({
      phone,
      password,
      country,
      latlong = 'latlong',
      deviceToken = '1',
      deviceType = 0,
    }) => {
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('password', password);
      formData.append('country', country);
      formData.append('latlong', latlong);
      formData.append('device_token', deviceToken);
      formData.append('device_type', deviceType);

      await api.post('/api/v1/register', formData);
    },
  );
  return mutation;
};

export const useLogin = () => {
  const mutation = useMutation(
    async ({
      phone,
      password,
      latlong = 'latlong',
      deviceToken = '1',
      deviceType = 0,
    }) => {
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('password', password);
      formData.append('latlong', latlong);
      formData.append('device_token', deviceToken);
      formData.append('device_type', deviceType);

      const { data } = await api.post('/api/v1/oauth/sign_in', formData);

      storage.setToken(data?.user?.access_token);

      return data;
    },
  );
  return mutation;
};
