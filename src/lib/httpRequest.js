/* eslint-disable no-undef */
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: `http://localhost:5000/api`,
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let userInfo;
  if (Cookies.get("userInfo")) {
    userInfo = JSON.parse(Cookies.get("userInfo"));
  }

  let company;

  if (Cookies.get('company')) {
    company = Cookies.get('company');
    console.log('Admin Http Services Cookie Read If : ' + company);
  }

  // console.log('Admin Http Services Cookie Read : ' + company);
  // let companyName = JSON.stringify(company);

  return {
    ...config,
    headers: {
      authorization: userInfo ? `Bearer ${userInfo.token}` : null,
      company: company ? company : null
    }
  };
});

const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) => axiosInstance.get(url, body, headers).then(responseBody),

  post: (url, body) => axiosInstance.post(url, body).then(responseBody),

  put: (url, body, headers) => axiosInstance.put(url, body, headers).then(responseBody),

  patch: (url, body) => axiosInstance.patch(url, body).then(responseBody),

  delete: (url, body) => axiosInstance.delete(url, body).then(responseBody)
};

export default requests;
