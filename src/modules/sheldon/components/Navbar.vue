<template>
  <div class="hero">
    <div
      class="d-flex justify-content-center align-items-center flex-column flex-md-row pt-5"
      data-aos="fade-down-right"
      data-aos-duration="2000"
    >
      <img src="@/assets/logo.png" alt="Genius Logo" />
      <h1 class="top__font">SHELDON</h1>
    </div>
  </div>
</template>
//

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../../../assets/hero.jpg");
  background-color: #00000070;
  background-blend-mode: soft-light;
  height: 30rem;
  background-repeat: none;
  background-size: cover;
}

.top__font {
  font-family: "Kalam", cursive;
  font-size: 5rem;
  font-weight: bold;
  color: white;
}

@media (min-width: 768px) {
  .top__font {
    font-size: 7rem;
  }
}

img {
  height: 12rem;
}
</style>
