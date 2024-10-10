import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: {name : 'home'}
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'movielist',
      path: '/movielist',
      component: () => import('@/views/MovieListView.vue'),
    },
    {
      name: 'viewedFilms',
      path: '/viewedFilms',
      component: () => import('@/views/ViewedListView.vue')
    }
  ]
})


export default router