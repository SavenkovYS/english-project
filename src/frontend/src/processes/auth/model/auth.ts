import { defineStore } from 'pinia';
import Cookies from 'ts-cookies';

import { IUser, IAuthProps } from '@/shared/api/auth/model';
import { registerUser, tryLogin } from '@/shared/api/auth';
import { routesNames } from '@/pages/config';
import axios from 'axios';
import { API_URL } from '@/shared/api/instance/instance';

export const NAMESPACE = 'auth';

export const useAuth = defineStore('auth', {
  state: () => ({
    user: {} as IUser,
    isLoggedIn: false,
  }),
  actions: {
    async login({ login, password }: IAuthProps) {
      const response = await tryLogin({ login, password });
      localStorage.setItem('accessToken', response.data.accessToken);
      this.user = response.data.user;
      this.isLoggedIn = true;
    },
    async registerUser({ login, password }: IAuthProps) {
      const response = await registerUser({ login, password });
      localStorage.setItem('accessToken', response.data.accessToken);
      this.user = response.data.user;
      this.isLoggedIn = true;
    },
    async logout() {
      this.user = {} as IUser;
      this.isLoggedIn = false;
      if (Cookies.get('refreshToken')) {
        Cookies.remove('refreshToken');
      }
      localStorage.removeItem('accessToken');

      await this.router.push({ name: routesNames.login });
    },
    async checkAuth() {
      const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
      localStorage.setItem('accessToken', response.data.accessToken);
      this.user = response.data.user;
      this.isLoggedIn = true;
    },
  },
});
