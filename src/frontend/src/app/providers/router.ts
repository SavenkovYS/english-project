import { createRouter, createWebHistory, RouteRecordName } from 'vue-router';
import { routes } from '@/pages/index';
import { useAuth } from '@/processes/auth/model/auth';
import { routesNames } from '@/pages/config';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuth();
  const publicPagesNames: RouteRecordName[] = [routesNames.login, routesNames.registration];
  const authPages: RouteRecordName[] = [routesNames.login, routesNames.registration];
  let isRoutePublic = false;
  let isRouteAuth = false;
  if (to.name) {
    isRoutePublic = publicPagesNames.includes(to.name);
    isRouteAuth = authPages.includes(to.name);
  }
  if (!auth.isLoggedIn && !isRoutePublic) {
    await auth.checkAuth();
  }

  if (auth.isLoggedIn && isRouteAuth) {
    next({ name: routesNames.quiz });
  }
  next();
});

export default router;
