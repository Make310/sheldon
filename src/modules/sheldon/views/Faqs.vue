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
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            ¿En que materias me pueden ayudar los Sheldons?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFour"
        >
          <div class="accordion-body">
            Por el momento nuestros Sheldons son expertos en las siguientes
            materias: Calculo, fisca, algebra, química, termodinámica o balances
            de energía y materia, control de procesos, fenómenos de transporte
            (transferencia de calor y transferencia de masa), investigación de
            operaciones y diseño de plantas.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            ¿En qué países operamos?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFive"
        >
          <div class="accordion-body">
            Cualquier persona de habla hispana con acceso a nuestro sitio web
            puede comunicarse con nuestros coordinadores para cotizar un
            servicio, nuestros medios de comunicación no tienen límites
            geográficos.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseSix"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSix"
          >
            ¿Cómo se realizan los pagos?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingSix"
        >
          <div class="accordion-body">
            En Sheldon manejamos distintas formas de pago, las cuales se
            muestran en la página de inicio. Los pagos se realizan por
            anticipado, al momento de aceptar la cotización el coordinador le
            dará entrega del número de cuenta del medio que usted desee para que
            haga la consignación, una vez realizada la consignación se le dará
            entrega de un comprobante de pago y uno de nuestros Sheldons
            iniciará a realizar la orden pedida o en su defecto a apartar un
            espacio en su agenda para servicios por cita.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseSeven"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSeven"
          >
            ¿Cuántos servicios puedo solicitar?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingSeven"
        >
          <div class="accordion-body">
            En Sheldon atenderemos todas las solicitudes que se hagan a través
            de nuestros coordinadores, sin embargo, recomendamos que se haga una
            solicitud por materia o por trabajo deseado, ya que si se solicitan
            múltiples servicios en una solicitud el precio cotizado se dará para
            el total de los servicios, así mismo, la ayuda brindada en la
            solicitud dependerá que se apruebe el conjunto de servicios ya que
            se requiere encontrar un Sheldon con los conocimientos necesarios
            para todos los servicios.
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
