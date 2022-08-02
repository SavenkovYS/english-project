import { RouteRecordRaw } from 'vue-router';
import { checkAuth, routesNames } from './config';
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
    beforeEnter: checkAuth,
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
    beforeEnter: checkAuth,
  },
  {
    path: '/quiz/questions',
    name: routesNames.questions,
    component: () => import('./quiz/questions/index.vue'),
  },
];

export { Routing };
