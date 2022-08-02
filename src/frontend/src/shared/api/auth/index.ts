import instance from '@/shared/api/instance/instance';
import { IAuthProps } from '@/shared/api/auth/model';

export function tryLogin({ password, login }: IAuthProps) {
  const body = {
    login,
    password,
  };

  return instance.post('/user/login', body);
}

export function registerUser({ password, login }: IAuthProps) {
  const body = {
    login,
    password,
  };

  return instance.post('/user/signup-user', body);
}

export function logoutUser() {
  return instance.post('user/logout');
}
