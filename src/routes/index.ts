import { BlankLayout } from "@/components/layout/blank-layout";
import { DefaultLayout } from "@/components/layout/default-layout";
import { Dashboard } from "@/pages/Dashboard";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Users } from "@/pages/Users";
import { useAuthStore } from "@/stores/auth";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: BlankLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/login",
        component: Login,
      },
    ],
  },
  {
    path: "/",
    component: DefaultLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
      {
        path: "/users",
        component: Users,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const { isAuthenticated, checkAuth } = useAuthStore();

  if (to.meta.requiresAuth && !isAuthenticated) {
    await checkAuth();
    next();
  } else {
    next();
  }
});

export default router;
