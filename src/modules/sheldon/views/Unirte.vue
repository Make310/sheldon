<template>
  <div class="container">
    <h1 class="text-center m-5" data-aos="fade-down" data-aos-duration="2000">
      ¿QUIERES SER UN SHELDON?
    </h1>
    <div data-aos="zoom-in" data-aos-duration="1500">
      <p>
        Nosotros nos tomamos muy enserio la selección de nuestros Sheldons, por
        eso realizamos un proceso de selección con el fin de seleccionar a la
        persona mas adecuada para la vacante disponible, si quieres ser uno de
        nuestros Sheldons debes tener en cuenta los siguientes prerrequisitos:
      </p>
      <ul class="m-5">
        <li>
          Ser un profesional graduado o estudiante de últimos semestres de una
          carrera profesional.
        </li>
        <li>
          Tener un dominio profundo de ciertas asignaturas relacionadas con tu
          carrera.
        </li>
        <li>Disponer de una hoja de vida bien detallada.</li>
      </ul>
      <p class="mb-5">
        Si cumples con los prerrequisitos mencionados anteriormente, comunícate
        con un nuestro personal de recursos humanos para dar tus primeros pasos
        en el proceso de selección.
      </p>
      <button
        type="button"
        class="btn btn-success mb-5"
        @click="clickBtnCancel"
      >
        Contactanos
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickBtnCancel() {
      window.location.href =
        "https://api.whatsapp.com/send?phone=3054547682&text=Hola,%20me%20gustaria%20cotizar%20uno%20de%20tus%20servicios.";
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 0.5rem;
}
</style>
