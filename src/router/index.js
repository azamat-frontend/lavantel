import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/views/Works.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/Reviews.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/Contacts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-link'
})

export default router
