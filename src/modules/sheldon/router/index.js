export default {
  name: "sheldon",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/sheldon/layouts/sheldonLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "inicio",
      component: () =>
        import(
          /* webpackChunkName: "daybook" */ "@/modules/sheldon/views/MainInicio.vue"
        ),
    },
    {
      path: "/sheldon/faqs",
      name: "faqs",
      component: () =>
        import(
          /* webpackChunkName: "daybook" */ "@/modules/sheldon/views/Faqs.vue"
        ),
    },
    {
      path: "/sheldon/nosotros",
      name: "nosotros",
      component: () =>
        import(
          /* webpackChunkName: "daybook" */ "@/modules/sheldon/views/Nosotros.vue"
        ),
    },
    {
      path: "/sheldon/unirte",
      name: "unirte",
      component: () =>
        import(
          /* webpackChunkName: "daybook" */ "@/modules/sheldon/views/Unirte.vue"
        ),
    },
  ],
};
