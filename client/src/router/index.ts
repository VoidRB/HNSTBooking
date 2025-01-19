import { createRouter, createWebHistory } from 'vue-router'
import { decode } from 'hono/jwt'
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
        requireAuth: false,
      },
    },
    {
      path: '/PeerSupporter',
      name: 'PeerSupporterView',
      component: () => import('@/views/PeerSupporterView.vue'),
      meta: {
        title: 'PS',
        requireAuth: true,
      },
    },
    {
      path: '/Session',
      name: 'SessionView',

      component: () => import('@/views/SessionView.vue'),
      meta: {
        title: 'Book Session',
        requireAuth: true,
      },
    },
    {
      path: '/Coordinator',
      name: 'CoordinatorView',

      component: () => import('@/views/CoordinatorView.vue'),
      meta: {
        title: 'Coordinator',
        requireAuth: true,
      },
    },
    {
      path: '/Audit',
      name: 'AuditorView',

      component: () => import('@/views/AuditorView.vue'),
      meta: {
        title: 'Audit',
        requireAuth: true,
      },
    },
    {
      path: '/Assessments',
      name: 'AssessmentsView',

      component: () => import('@/views/AssessmentsView.vue'),
      meta: {
        title: 'Assessments',
        requireAuth: true,
      },
    },
    {
      path: '/FAQ',
      name: 'FAQView',

      component: () => import('@/views/FAQView.vue'),
      meta: {
        title: 'FAQ',
        requireAuth: true,
      },
    },
    {
      path: '/:catchall(.*)',
      name: 'notFound',
      meta: {
        title: '404 Not Found',
        requireAuth: true,
      },
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | B'Saraha`
  next()
})

// router.beforeEach(async (to, _from, next) => {
//   if (to.meta.requireAuth === true) {
//     const { payload } = decode(document.cookie)
//     if (payload.roleId > 1) {
//       return next()
//     }
//     return next(false)
//   }
//   return next()
// })

export default router
