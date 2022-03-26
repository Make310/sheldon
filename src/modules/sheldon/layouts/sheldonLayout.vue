<template>
  <Navbar />
  <router-view />
  <Footer />
  <a
    class="icon-whatsapp"
    target="_blank"
    href="https://api.whatsapp.com/send?phone=3054547682&text=Hola,%20me%20gustaria%20cotizar%20uno%20de%20tus%20servicios."
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-whatsapp"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="#00b341"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path
        d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"
      />
    </svg>
  </a>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
};
</script>

<style lang="scss">
.icon-whatsapp {
  position: fixed;
  height: 55px;
  width: 55px;
  line-height: 55px;
  bottom: 45px;
  right: 45px;

  &:hover {
    transform: scale(1.4);
    transition: 0.5s;
  }
}
</style>
