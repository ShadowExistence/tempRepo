import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/funnycaptcha',
      name: 'Funny Captcha',
      component: () => import('../views/CaptchaView.vue')
    },
    {
      path: '/tree',
      name: 'Tree List',
      component: () => import('../views/TreeListView.vue')
    },
    {
      path: '/tree/V63Nuc0Nl80PXTpTd6xH7',
      name: 'Parking',
      component: () => import('../views/TreesViews/ParkingView.vue')
    }
  ]
})

export default router
