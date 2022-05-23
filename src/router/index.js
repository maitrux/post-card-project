import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllPostsView from "../views/AllPostsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AllPostsView,
    },
    {
      path: "/new-post",
      name: "new-post",
      component: () => import("../views/NewPostView.vue"),
    },
    {
      path: "/post/1",
      name: "post/1",
      component: () => import("../views/SingleCardView.vue"),
    },
  ],
});

export default router;
