import { createRouter, createWebHistory } from "vue-router";
import AllPostsView from "../views/AllPostsView.vue";
import SingleCardView from "../views/SingleCardView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AllPostsView,
    },
    {
      path: "/new-post",
      name: "NewPostPage",
      component: () => import("../views/NewPostView.vue"),
    },
    {
      path: "/post/:id",
      name: "SinglePostPage",
      component: SingleCardView,
      props: true,
    },
    { 
      path: '/404', 
      name: "NotFoundPage",
      component: NotFoundView 
    },
  ],
});

export default router;
