<template>
  <div>
    <div class="container mt-5 d-flex flex-column align-items-center">
      <h1 data-aos="fade-down" data-aos-duration="2000">
        ¿En que podemos ayudarte?
      </h1>
      <div
        class="row mt-5 gap-5 justify-content-center"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div class="card col-4" style="width: 18rem">
          <img src="@/assets/tareas.jpg" class="card-img-top" alt="Tareas" />
          <div class="card-body">
            <h5 class="card-title">Tareas, talleres y trabajos</h5>
            <p class="card-text">
              Nuestros sheldons te ayudarán a realizar las tareas, talles y
              trabajos que necesitas para una fecha concreta.
            </p>
          </div>
        </div>
        <div class="card col-4" style="width: 18rem">
          <img
            src="@/assets/trabajos.jpg"
            class="card-img-top"
            alt="trabajos"
          />
          <div class="card-body">
            <h5 class="card-title">Trabajos y talleres por cita</h5>
            <p class="card-text">
              Nuestros sheldons se conectarán contigo en el horario que desees
              para ayudarte en tiempo real con tu trabajo.
            </p>
          </div>
        </div>
        <div class="card col-4" style="width: 18rem">
          <img src="@/assets/clases.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Clases virtuales</h5>
            <p class="card-text">
              Nuestros Sheldons te darán una clase virtual de la asignatura o
              tema que necesitas, tu solo dinos lo que necesitas aprender.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container contenido">
      <h1 data-aos="fade-down" data-aos-duration="2000" class="text-center">
        Formas de pago
      </h1>
      <div
        class="mt-5 d-flex flex-column flex-sm-row justify-content-sm-evenly align-items-center formas-pago"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <img src="@/assets/paypal-logo.svg" alt="imagen pago" />

        <img src="@/assets/nequi-logo.png" alt="imagen pago" />

        <img src="@/assets/daviplata.svg" alt="imagen pago" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contenido {
  margin: 10rem auto 10rem auto;
}
h5 {
  height: 4rem;
}

.formas-pago {
  img {
    margin-top: 2rem;
    height: 5rem;
    width: 8rem;
  }
}
</style>
