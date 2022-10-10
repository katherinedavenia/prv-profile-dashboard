import Cookies from 'js-cookie';

export const setCookies = (key, value, options = undefined) => Cookies.set(key, value, options);

export const getCookies = (key) => Cookies.get(key);

export const removeCookies = (key) => Cookies.remove(key);
