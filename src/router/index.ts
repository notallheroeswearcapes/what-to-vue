import { createRouter, createWebHistory } from 'vue-router'
import WatchListView from '../views/WatchListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'watch-list',
      component: WatchListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
