import { RouteRecordRaw } from 'vue-router';
import Routing from './index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./login/index.vue'),
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('./quiz/index.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('./registration/index.vue'),
  },
];

export { Routing };
