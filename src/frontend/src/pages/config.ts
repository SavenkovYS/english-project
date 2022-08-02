import { useAuth } from '@/processes/auth/model/auth';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export enum routesNames {
    login = 'login',
    main = 'main',
    quiz = 'quiz',
    registration = 'registration',
    questions = 'questions'
}

export function checkAuth(from: RouteLocationNormalized, to: RouteLocationNormalized, next: NavigationGuardNext) {
  const auth = useAuth();
  if (!auth.isLoggedIn) {
    auth.checkAuth();
    next({ name: routesNames.quiz });
  }
  next();
}
