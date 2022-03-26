<template>
  <div class="hero">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <router-link :to="{ name: 'inicio' }" class="nav-link"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'faqs' }" class="nav-link"
                >FAQs</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'nosotros' }" class="nav-link" href="#"
                >Nosotros</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'unirte' }" class="nav-link" href="#"
                >¿Quieres ser un sheldon?</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="d-flex justify-content-center align-items-center flex-column flex-md-row p-md-5"
      data-aos="fade-down-right"
      data-aos-duration="2000"
    >
      <img src="@/assets/logo.png" alt="Genius Logo" />
      <h1 class="top__font">SHELDON</h1>
    </div>
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,192C840,160,960,128,1080,138.7C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>
//

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-image: url("../../../assets/hero.jpg");
  background-color: #00000070;
  background-blend-mode: soft-light;
  height: 38rem;
  background-repeat: none;
  background-size: cover;
}

.top__font {
  font-size: 4.5rem;
  font-weight: bold;
  color: white;
}

@media (min-width: 768px) {
  .top__font {
    font-size: 7rem;
  }
}
@media (max-width: 992px) {
  .hero {
    background-position: center right;
  }
}

img {
  height: 6rem;
  margin-right: 2rem;
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -1px;
}
a {
  font-size: 1.3rem;
  font-weight: bold;
  color: white !important;
}

.router-link-exact-active {
  color: red !important;
}
</style>
