export default {
  name: "sheldon",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/sheldon/layouts/sheldonLayout.vue"
    ),
  children: [],
};
