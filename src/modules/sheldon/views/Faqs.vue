<template>
  <div class="container my-5">
    <h1 class="text-center mb-5">FAQS</h1>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            ¿Quién atiende mis mensajes?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            Tus mensajes son recibidos a través de una de nuestras cuentas
            empresariales, estas son manejadas por nuestros coordinadores, los
            cuales se encargarán de recibir la información proporcionada y de
            buscar al Sheldon idóneo para tu necesidad.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            ¿Cuáles son las políticas de privacidad?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            Toda la información personal proporcionada será de conocimiento
            única y exclusivamente de nuestros coordinadores, quienes tienen
            prohibida la divulgación de la identidad de nuestros clientes, así
            mismo, el procedimiento a seguir posterior a la culminación de la
            asesoría es la eliminación de toda la información recibida (chats,
            documentos, audios, etc …).
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            ¿Quiénes son los Sheldons?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            Todos los Sheldons son profesionales o estudiantes de últimos
            semestres de diferentes carreras profesionales vea los
            <strong @click="$router.push({ name: 'unirte' })"
              >requisitos para ser un Sheldon</strong
            >
            , entre nuestro grupo de Sheldons se seleccionará aquel que posea un
            perfil profesional e histórico mas adecuado para tu solicitud, el
            cual enviará la cotización correspondiente a tu solicitud.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
strong {
  cursor: pointer;
}
</style>
