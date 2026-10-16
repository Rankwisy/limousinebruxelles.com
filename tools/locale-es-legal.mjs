/** Páginas legales: contenido en español (es-ES). */
import { SITE } from './site.mjs';

const M = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;

export const LEGAL = [
  {
    slug: 'aviso-legal.html',
    title: 'Aviso Legal | Aurum — Limusina Bruselas',
    description: 'Aviso legal de limousinebruxelles.com, sitio operado por Aurum — Limusina Bruselas, Bélgica.',
    h1: 'Aviso legal',
    sections: `
        <h2>Titular del sitio</h2>
        <p>Este sitio web, <strong>limousinebruxelles.com</strong>, está editado por <strong>Aurum — Limousine Bruxelles</strong>, prestador de servicios de alquiler de vehículos con conductor con sede en Bruselas, Bélgica.</p>
        <p>Contacto: ${M}</p>
        <h2>Actividad</h2>
        <p>Alquiler de limusinas, coches con chófer, monovolúmenes, minibuses y autocares con conductor profesional, en Bruselas y en toda Bélgica, así como hacia países vecinos bajo petición.</p>
        <h2>Alojamiento</h2>
        <p>El sitio se sirve desde una infraestructura de alojamiento estático. Para cualquier consulta relativa al alojamiento, escriba a la dirección indicada arriba.</p>
        <h2>Propiedad intelectual</h2>
        <p>Todos los contenidos de este sitio (textos, estructura, maquetación, identidad visual) están protegidos por derechos de autor. Queda prohibida cualquier reproducción, representación o adaptación, total o parcial, sin autorización previa por escrito.</p>
        <p>Las fotografías de ilustración se utilizan bajo licencia libre de derechos o son imágenes generadas, y siguen siendo propiedad de sus respectivos autores. Son meramente ilustrativas y no representan vehículos concretos de la flota.</p>
        <h2>Tarifas y disponibilidad</h2>
        <p>Las tarifas que figuran en este sitio son <strong>orientativas</strong> y están expresadas en euros (EUR). No constituyen una oferta contractual. El precio final se indica en el presupuesto personalizado que se emite tras recibir su solicitud, en función de la duración, del número de pasajeros y del recorrido exacto.</p>
        <h2>Limitación de responsabilidad</h2>
        <p>Aurum — Limousine Bruxelles se esfuerza por mantener la información de este sitio exacta y actualizada, sin poder garantizar la ausencia total de errores u omisiones. La información se ofrece a título indicativo y puede modificarse en cualquier momento.</p>
        <h2>Legislación aplicable</h2>
        <p>Este sitio y los servicios descritos en él se rigen por el derecho belga. Cualquier litigio será competencia de los tribunales belgas.</p>
      `,
  },
  {
    slug: 'politica-de-privacidad.html',
    title: 'Política de Privacidad | Aurum — Limusina Bruselas',
    description: 'Política de privacidad y tratamiento de datos personales en limousinebruxelles.com, conforme al RGPD.',
    h1: 'Política de privacidad',
    sections: `
        <p class="lead">Aurum — Limousine Bruxelles se toma en serio la protección de sus datos personales. Esta política explica qué datos recogemos, para qué y cuáles son sus derechos.</p>
        <h2>Responsable del tratamiento</h2>
        <p>Aurum — Limousine Bruxelles, Bruselas, Bélgica. Contacto: ${M}</p>
        <h2>Datos que recogemos</h2>
        <p>Solo recogemos los datos que usted nos envía voluntariamente mediante el formulario de presupuesto o por correo electrónico:</p>
        <ul>
          <li>su nombre;</li>
          <li>su dirección de correo electrónico;</li>
          <li>los datos de su viaje: fecha deseada, lugar de recogida, destino, número de pasajeros, tipo de vehículo;</li>
          <li>cualquier información que decida añadir en el campo de mensaje.</li>
        </ul>
        <h2>Finalidad del tratamiento</h2>
        <p>Estos datos se utilizan exclusivamente para:</p>
        <ul>
          <li>responder a su solicitud de presupuesto;</li>
          <li>organizar y prestar el servicio de transporte si confirma la reserva;</li>
          <li>mantener la relación comercial.</li>
        </ul>
        <p>Sus datos nunca se venden, alquilan ni ceden a terceros con fines comerciales.</p>
        <h2>Base jurídica</h2>
        <p>El tratamiento se basa en su consentimiento (la casilla del formulario) y en las medidas precontractuales adoptadas a petición suya.</p>
        <h2>Plazo de conservación</h2>
        <p>Las solicitudes de presupuesto se conservan el tiempo necesario para atender su consulta y, si se formaliza una reserva, durante el plazo legal de conservación que corresponda a los registros comerciales.</p>
        <h2>Transmisión del formulario</h2>
        <p>El formulario de presupuesto envía su mensaje a nuestra dirección de correo a través de un servicio externo de reenvío de formularios. Ese proveedor actúa únicamente como intermediario técnico y no reutiliza sus datos.</p>
        <h2>Cookies</h2>
        <p>Este sitio <strong>no instala cookies publicitarias ni de análisis de comportamiento</strong>. Solo se cargan desde redes de distribución de contenidos externas los recursos técnicos necesarios para mostrar las fuentes y los iconos.</p>
        <h2>Sus derechos</h2>
        <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene derecho a acceder a sus datos, rectificarlos, suprimirlos, limitar su tratamiento y oponerse a él, así como derecho a la portabilidad de los datos.</p>
        <p>Para ejercer estos derechos, escríbanos a ${M}. También puede presentar una reclamación ante la Autoridad belga de Protección de Datos o ante la Agencia Española de Protección de Datos.</p>
        <h2>Visitantes desde España y la Unión Europea</h2>
        <p>Si nos contacta desde España o desde cualquier otro país de la Unión Europea, sus datos se tratan y se almacenan en la Unión Europea, bajo el RGPD, el mismo marco de protección que le ampara en su país.</p>
        <h2>Seguridad</h2>
        <p>El sitio se sirve exclusivamente a través de HTTPS. Aplicamos medidas razonables para proteger los datos que nos envía frente a accesos no autorizados.</p>
      `,
  },
];
