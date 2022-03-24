import { createRouter, createWebHistory } from "vue-router";
import sheldonRouter from "../modules/sheldon/router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: (to) => {
      return { name: "inicio" };
    },
  },

  {
    path: "/sheldon",
    ...sheldonRouter,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
