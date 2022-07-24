import { defineStore } from 'pinia';

import { IUser, IAuthProps } from '@/shared/api/auth/model';
import { tryLogin } from '@/shared/api/auth';

export const NAMESPACE = 'auth';

export const useAuth = defineStore('auth', {
    state: () => ({
        user: {} as IUser
    }),
    actions: {
        async login({ login, password }: IAuthProps) {
            const response = await tryLogin({ login, password }); 
            console.log('[response]', response);
        }
    }
});