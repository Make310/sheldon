<template>
  <Navbar />
  <router-view />
  <Footer />
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
body {
  font-family: "Kalam", cursive;
}
</style>
