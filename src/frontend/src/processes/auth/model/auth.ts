import { defineStore } from 'pinia';

import { IUser, IAuthProps } from '@/shared/api/auth/model';
import { registerUser, tryLogin } from '@/shared/api/auth';

export const NAMESPACE = 'auth';

export const useAuth = defineStore('auth', {
  state: () => ({
    user: {} as IUser,
    isLoggedIn: false,
  }),
  actions: {
    async login({ login, password }: IAuthProps) {
      const response = await tryLogin({ login, password });
      console.log('[response]', response);
    },
    async registerUser({ login, password }: IAuthProps) {
      const response = await registerUser({ login, password });
      this.user = response.data.user;
      this.isLoggedIn = true;
    },
  },
});
