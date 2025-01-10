import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/PeerSupporter',
      name: 'PS',
      component: () => import('@/views/PeerSupporterView.vue'),
      meta: {
        title: 'PS',
      },
    },
    {
      path: '/Appointments',
      name: 'AppointmentView',

      component: () => import('@/views/AppointmentView.vue'),
      meta: {
        title: 'Appointments',
      },
    },
    {
      path: '/Coordinator',
      name: 'CoordinatorView',

      component: () => import('@/views/CoordinatorView.vue'),
      meta: {
        title: 'Coordinator',
      },
    },
    {
      path: '/:catchall(.*)',
      name: 'notFound',
      meta: {
        title: '404 Not Found',
      },
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | B'Saraha`
  next()
})

export default router
