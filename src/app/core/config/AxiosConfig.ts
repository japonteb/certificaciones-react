import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const axiosIntance1 = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE_1,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});
