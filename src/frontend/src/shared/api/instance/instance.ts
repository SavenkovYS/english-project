import axios from 'axios';
import { useAuth } from '@/processes/auth/model/auth';

export const API_URL = 'http://localhost:8000';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }
    return config;
  },
);

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
        localStorage.setItem('accessToken', response.data.accessToken);
        return instance.request(originalRequest);
      } catch (responseError) {
        console.log(responseError);
      }
    } else {
      const auth = useAuth();
      auth.logout();
    }
  },
);

export default instance;
