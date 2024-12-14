import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { name: "home" },
    },
    {
      name: "home",
      path: "/home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      name: "movielist",
      path: "/movielist",
      component: () => import("@/views/MovieListView.vue"),
    },
    {
      name: "viewedFilms",
      path: "/viewedFilms",
      component: () => import("@/views/ViewedListView.vue"),
    },
    {
      name: "account",
      path: "/account",
      component: () => import("@/views/AccountView.vue"),
    },
  ],
});

export default router;
