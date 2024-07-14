import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import NotificationService from "../toastify/notificationService";
import { useNavigate } from "react-router-dom";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: 'https://api-daesonamu.p-e.kr',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken !== null || accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN")
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) : Promise<any> => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (
      originalRequest &&
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("REFRESH_TOKEN");
      if (refreshToken) {
        try {
          const response = await axios.post(
            'https://api-daesonamu.p-e.kr/auth/refresh',
            {
              refreshToken,
            }
          );
          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;

          localStorage.setItem("ACCESS_TOKEN", newAccessToken);
          localStorage.setItem("REFRESH_TOKEN", newRefreshToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          NotificationService.error('토큰이 만료되었습니다. 다시 로그인 해주세요.');
          return Promise.reject(refreshError);
        }
      }
    }
  }
);

export default instance;  
