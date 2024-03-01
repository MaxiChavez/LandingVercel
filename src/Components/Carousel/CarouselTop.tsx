import Carousel from "react-bootstrap/Carousel";
import "./CarouselTop.css";
import uno from "../../Resources/images/1.jpg";
import cuatro from "../../Resources/images/dosSi.png";
import siete from "../../Resources/images/tresSi.png";

const CarouselTop = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img-carousel d-block w-25 h-20"
          src={uno}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carousel d-block w-25 h-20"
          src={cuatro}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carousel d-block w-25 h-20"
          src={siete}
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselTop;
