<template>
  <div class="hero">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center flex-column flex-md-row pt-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img src="@/assets/logo.png" alt="Genius Logo" />
        <h1 class="top__font">SHELDON</h1>
      </div>
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
  height: 35rem;
  background-repeat: none;
  background-size: cover;
}

.top__font {
  font-size: 5rem;
  font-weight: bold;
  color: #795d44;
}

@media (min-width: 768px) {
  .top__font {
    font-size: 7rem;
  }
}

img {
  height: 15rem;
}
</style>
