import axios from 'axios';

export const API_URL = 'http://localhost:8000';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

instance.interceptors.request.use(
  config => {
    if (config.headers === undefined) {
        config.headers = {};
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }
);

instance.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);
        return instance.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
)

export default instance;
