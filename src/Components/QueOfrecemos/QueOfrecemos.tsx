import CardOffer from "./CardOffer/CardOffer";
import "./QueOfrecemos.css";
import mobile from "../../Resources/images/mobile.svg";
import blueCarga from "../../Resources/images/blueCarga.svg";
import blueSeo from "../../Resources/images/blueSeo.svg";
import blueSocial from "../../Resources/images/blueSocial.svg";
import blueSearch from "../../Resources/images/blueSearch.svg";
import blueSupport from "../../Resources/images/blueSupport.svg";

import whiteMobile from "../../Resources/images/whiteMobile.svg";
import whiteCarga from "../../Resources/images/whiteRapida.svg";
import whiteSeo from "../../Resources/images/whitePersonOk.svg";
import whiteSocial from "../../Resources/images/whiteSocial.svg";
import whiteSearch from "../../Resources/images/whiteSearch.svg";
import whiteSupport from "../../Resources/images/whiteSupport.svg";

const QueOfrecemos = () => {
  return (
    <div className="seccion">
      <div id="titleOffer">
        <h1>
          UN SITIO WEB QUE <span id="amaras">AMARAS</span>
        </h1>
      </div>
      <div className="queOfrecemos">
        <CardOffer
          imgOblue={mobile}
          imgOwhite={whiteMobile}
          titleO="Diseño Responsivo de Alta Calidad:"
          descriptionO="Nuestros sitios web están diseñados para lucir espectaculares en cualquier dispositivo. Desde smartphones hasta computadoras de escritorio, tu página se verá perfecta en todos ellos."
        />

        <CardOffer
          imgOblue={blueSeo}
          imgOwhite={whiteSeo}
          titleO="Experiencia de Usuario Optimizada:"
          descriptionO="Creamos sitios web que no solo se ven bien, sino que también brindan una experiencia de usuario excepcional. La navegación fluida y la disposición intuitiva mantendrán a tus visitantes comprometidos."
        />
        <CardOffer
          imgOblue={blueCarga}
          imgOwhite={whiteCarga}
          titleO="Carga Rápida y Eficiente:"
          descriptionO="Con nuestra tecnología optimizada, garantizamos que tu sitio web cargará de manera rápida y eficiente, manteniendo a tus visitantes involucrados desde el primer momento."
        />

        <CardOffer
          imgOblue={blueSearch}
          imgOwhite={whiteSearch}
          titleO="SEO Incorporado:"
          descriptionO="La optimización para motores de búsqueda es crucial para ser encontrado en línea. Integramos técnicas de SEO en cada página que creamos, lo que aumentará tus posibilidades de aparecer en los resultados de búsqueda."
        />
        <CardOffer
          imgOblue={blueSocial}
          imgOwhite={whiteSocial}
          titleO="Redes Sociales:"
          descriptionO="Conecta tu presencia en línea de manera más efectiva mediante la integración perfecta de tus perfiles de redes sociales en tu sitio web. Esto te permite llegar a un público más amplio y mantener a tus visitantes actualizados."
        />
        <CardOffer
          imgOblue={blueSupport}
          imgOwhite={whiteSupport}
          titleO="Soporte y Mantenimiento:"
          descriptionO="No te dejamos solo, ofrecemos mantenimiento y soporte constante para asegurarnos de que tu web siga funcionando sin problemas y esté al día con las últimas tendencias."
        />
      </div>
    </div>
  );
};

export default QueOfrecemos;
