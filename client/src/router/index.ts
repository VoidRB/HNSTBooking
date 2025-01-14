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
      name: 'PeerSupporterView',
      component: () => import('@/views/PeerSupporterView.vue'),
      meta: {
        title: 'PS',
      },
    },
    {
      path: '/Session',
      name: 'SessionView',

      component: () => import('@/views/SessionView.vue'),
      meta: {
        title: 'Book Session',
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
      path: '/Audit',
      name: 'AuditorView',

      component: () => import('@/views/AuditorView.vue'),
      meta: {
        title: 'Audit',
      },
    },
    {
      path: '/Assessments',
      name: 'AssessmentsView',

      component: () => import('@/views/AssessmentsView.vue'),
      meta: {
        title: 'Assessments',
      },
    },
    {
      path: '/FAQ',
      name: 'FAQView',

      component: () => import('@/views/FAQView.vue'),
      meta: {
        title: 'FAQ',
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
