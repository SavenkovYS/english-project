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
  let isRoutePublic = false;
  if (to.name) {
    isRoutePublic = publicPagesNames.includes(to.name);
  }
  if (!auth.isLoggedIn && !isRoutePublic) {
    await auth.checkAuth();
  }
  next();
});

export default router;
