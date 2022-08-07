import { RouteRecordRaw } from 'vue-router';
import routesNames from './config';
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
    component: () => import('./login/LoginPage.vue'),
  },
  {
    path: '/quiz',
    name: routesNames.quiz,
    component: () => import('./quiz/QuizPage.vue'),
  },
  {
    path: '/registration',
    name: routesNames.registration,
    component: () => import('./registration/RegistrationPage.vue'),
  },
  {
    path: '/quiz/questions',
    name: routesNames.questions,
    component: () => import('./quiz/questions/QuestionsPage.vue'),
  },
  {
    path: '/tutors',
    name: routesNames.tutors,
    component: () => import('./tutors/TutorsPage.vue'),
  },
];

export { Routing };
