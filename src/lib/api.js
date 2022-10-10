import Axios from 'axios';

import storage from './storage';

const API_URL = 'http://localhost:8010/proxy';

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.headers.Accept = 'application/json';
  return config;
}

const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      window.location = '/login';
    } else {
      const message = error.response?.data?.error?.errors[0] || error.message;
      return Promise.reject(new Error(message));
    }
  },
);

export default axios;
