import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/PeerSupporter',
      name: 'PS',
      component: () => import('../views/PeerSupporterView.vue'),
    },
    {
      path: '/Appointments',
      name: 'AppointmentView',

      component: () => import('../views/AppointmentView.vue'),
    },
    {
      path: '/Coordinator',
      name: 'Coordinator',

      component: () => import('../views/CoordinatorView.vue'),
    },
  ],
})

export default router
