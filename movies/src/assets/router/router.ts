import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'movielist',
      path: '/movielist',
      component: () => import('@/views/MovieListView.vue')
    }
  ]
})


export default router