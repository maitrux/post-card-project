import { createRouter, createWebHistory } from "vue-router";
import AllPostsView from "../views/AllPostsView.vue";
import SingleCardView from "../views/SingleCardView.vue";

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
      path: "/post/:id",
      name: "SinglePost",
      component: SingleCardView,
      props: true,
    },
  ],
});

export default router;
