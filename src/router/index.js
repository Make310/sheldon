import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import sheldonRouter from "../modules/sheldon/router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sheldon",
    ...sheldonRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
