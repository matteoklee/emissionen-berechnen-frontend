import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import CalculatorView from '@/views/CalculatorView.vue'

import authService from "@/services/authService.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/calculator',
      alias: '/rechner',
      name: 'calculator',
      component: CalculatorView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      alias: '/signin',
      name: 'login',
      component: SignInView
    },
    {
      path: '/register',
      alias: '/signup',
      name: 'register',
      component: SignUpView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      if (authService.isAuthenticated()) {
        next();
      } else {
        return next({ name: 'login' });
      }
    } else {
      next();
    }
});

export default router
