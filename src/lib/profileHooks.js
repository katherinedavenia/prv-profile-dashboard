import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from './api';

export const useGetProfile = () =>
  useQuery(['profile'], async () => {
    const { data } = await api.get('/api/v1/profile/me');
    return data;
  });

export const useAddExperience = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ position = '', companyName, startingFrom, endingIn }) => {
      const formData = new FormData();
      formData.append('position', position);
      formData.append('company_name', companyName);
      formData.append('starting_from', startingFrom);
      formData.append('ending_in', endingIn);

      await api.post('/api/v1/profile/career', formData);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['profile']),
    },
  );
  return mutation;
};

export const useAddEducation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ schoolName, graduationTime }) => {
      const formData = new FormData();
      formData.append('school_name', schoolName);
      formData.append('graduation_time', graduationTime);

      await api.post('/api/v1/profile/education', formData);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['profile']),
    },
  );
  return mutation;
};

export const useAddBiodata = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ name, bio, birthday, hometown, gender }) => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('bio', bio);
      formData.append('birthday', birthday);
      formData.append('hometown', hometown);
      formData.append('gender', gender);

      await api.post('/api/v1/profile', formData);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['profile']),
    },
  );
  return mutation;
};

export const useAddCoverBanner = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ image }) => {
      const formData = new FormData();
      formData.append('image', image);

      await api.post('/api/v1/uploads/cover', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['profile']),
    },
  );
  return mutation;
};

export const useAddProfilePicture = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ image }) => {
      const formData = new FormData();
      formData.append('image', image);

      const { data } = await api.post('/api/v1/uploads/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const setProfileFormData = new FormData();
      setProfileFormData.append('id', data.user_picture.id);
      await api.post('/api/v1/uploads/profile/default', setProfileFormData);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['profile']),
    },
  );
  return mutation;
};
