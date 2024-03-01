import "./faq.css";

import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="contentAcordeon seccion">
      <div className="Acordeon">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3 className="question">
                Qué beneficios tiene tener una página web?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <h3>
                Tener una página web ofrece una presencia en línea las 24 horas
                del día, los 7 días de la semana. Te ayuda a llegar a un público
                más amplio, mejorar tu visibilidad y proporcionar información
                sobre tus productos o servicios. Tú pagina web es tu presencia
                digital.
              </h3>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3 className="question">
                Cuál es la duración del hosting y qué incluye?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <h3>
                El hosting es anual, y el primer año está cubierto en el costo
                total. Incluye el alojamiento de tu página web en nuestros
                servidores para que esté disponible en Internet.
              </h3>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3 className="question">
                Por qué debería elegir vuestros servicios en lugar de otros?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <h3>
                Nuestros servicios se destacan porque no utilizamos plantillas
                predefinidas. Creamos diseños personalizados que se ajustan a
                las necesidades y la identidad de tu negocio, lo que te permite
                destacarte en línea, tener una web escalable y robusta a medida
                que tu negocio crezca.
              </h3>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3 className="question"> Qué métodos de pago aceptan?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <h3 className="question">
                Aceptamos transferencia bancaria y pagos en efectivo. Estamos
                comprometidos a brindarte opciones de pago seguras y
                convenientes.
              </h3>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h3 className="question">Ofrecen facturación para empresas?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <h3>
                Sí, proporcionamos facturas para empresas. Nos aseguramos de
                cumplir con todos los requisitos de facturación y proporcionarte
                los detalles necesarios para tus registros.
              </h3>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h3 className="question">
                Cómo puedo ponerme en contacto con ustedes para obtener más
                información?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <h3>
                Puedes ponerte en contacto con nosotros a través de nuestro
                formulario de contacto en la página web, por correo electrónico
                o por teléfono. Estamos aquí para responder a tus preguntas y
                ayudarte en el proceso de obtener tu página web.
              </h3>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
