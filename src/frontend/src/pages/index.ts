import { RouteRecordRaw } from 'vue-router';
import { routesNames } from './config';
import Routing from './index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesNames.main,
    redirect: '/login',
  },
  {
    path: '/login',
    name: routesNames.login,
    component: () => import('./login/index.vue'),
  },
  {
    path: '/quiz',
    name: routesNames.quiz,
    component: () => import('./quiz/index.vue'),
  },
  {
    path: '/registration',
    name: routesNames.registration,
    component: () => import('./registration/index.vue'),
  },
];

export { Routing };
