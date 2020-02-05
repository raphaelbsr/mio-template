import axios from "axios";

const api = axios.create({
  baseURL: "SomeUrlToConnectioToYourBackend.com:3000"
});

export default api;
