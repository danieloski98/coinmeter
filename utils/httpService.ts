import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import * as SecureStorage from "expo-secure-store";

export const FRONTEND_BASE_URL = "https://test404.diskox.com/";
export const BASE_URL = "https://test404.diskox.com/api/v1";
export const IMAGE_BASE = "https://test404.diskox.com/storage/";
export const NODE_SERVER = "https://diskoxserver-production.up.railway.app";
const SITE_URL = "https://test404.diskox.com";

const httpService = axios.create({
  baseURL: BASE_URL,
});

httpService.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const token = await SecureStorage.getItemAsync("token");
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
      if (token === null) {
        return config;
      }
      config.headers!["authorization"] = `Bearer ${token}`;

      return config;
    } else {
      config.headers!["Content-Type"] = "application/json";
      if (token === null) {
        return config;
      }
      config.headers!["authorization"] = `Bearer ${token}`;
      return config;
    }
  },
);

httpService.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  async (error: AxiosError<any, any>) => {
    if (!error.response) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject(error.response.data);
    }
  },
);
export default httpService;
