import { defineStore } from 'pinia';
import Cookies from 'ts-cookies';

import { IUser, IAuthProps } from '@/shared/api/auth/model';
import { registerUser, tryLogin } from '@/shared/api/auth';
import { routesNames } from '@/pages/config';

export const NAMESPACE = 'auth';

export const useAuth = defineStore('auth', {
  state: () => ({
    user: {} as IUser,
    isLoggedIn: false,
  }),
  actions: {
    async login({ login, password }: IAuthProps) {
      const response = await tryLogin({ login, password });
      this.user = response.data.user;
      this.isLoggedIn = true;
    },
    async registerUser({ login, password }: IAuthProps) {
      const response = await registerUser({ login, password });
      this.user = response.data.user;
      this.isLoggedIn = true;
    },
    async logout() {
      this.user = {} as IUser;
      this.isLoggedIn = false;
      if (Cookies.get('accessToken')) {
        Cookies.remove('accessToken');
      }
      if (Cookies.get('refreshToken')) {
        Cookies.remove('refreshToken');
      }

      await this.router.push({ name: routesNames.login });
    },
  },
});
