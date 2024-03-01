import "./TopPage.css";
import WorkButton from "../WorkButton/WorkButton";
import CarouselTop from "../Carousel/CarouselTop";
import logo from "../../Resources/images/LOGO2.svg";
const TopPage = () => {
  return (
    <>
      <div id="div-top">
        <div id="logo">
          <img src={logo} alt="Alignment Websites" />
        </div>
        <div id="header-text">
          <span>
            OBTEN UN SITIO WEB PROFESIONAL
            <br /> Y POTENCIA TU NEGOCIO
          </span>
        </div>
        <div id="div-workButton">
          <WorkButton
            text={"Trabaja con nosotros"}
            emailLink={"mailto:info@impacto-web.com"}
          />
        </div>

        <div id="carousel-header">
          <CarouselTop />
        </div>
      </div>
    </>
  );
};

export default TopPage;
