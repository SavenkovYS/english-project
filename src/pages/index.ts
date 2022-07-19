import { RouteRecordRaw } from 'vue-router';
import Routing from './index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('./login/index.vue'),
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('./quiz/index.vue'),
  },
];

export { Routing };
