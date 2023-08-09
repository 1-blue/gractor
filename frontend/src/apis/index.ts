import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

/** 2023/08/07 - axios instance - by 1-blue */
const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;

export * from "./floatingPopulation";
