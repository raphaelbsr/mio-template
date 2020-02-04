import axios from "axios";

import { getToken } from "./auth";

/**
 * process.env.REACT_APP_MIO_AUTH_API_URL
 * Url para o endpoint do serviço mio-auth
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_MIO_AUTH_API_URL
});

api.interceptors.request.use(async config => {
  const conf = config;
  const token = getToken();
  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
  }
  return conf;
});

export default api;
