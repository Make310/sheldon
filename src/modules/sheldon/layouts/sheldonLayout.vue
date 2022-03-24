<template>
  <Navbar />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
  },
};
</script>

<style lang="scss">
body {
  font-family: "Kalam", cursive;
}
</style>
