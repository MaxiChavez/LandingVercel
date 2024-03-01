import "./CardOffer.css";
import { useState } from "react";

interface CardOffersProps {
  imgOblue: string;
  imgOwhite: string;
  titleO: string;
  descriptionO: string;
}

const CardOffer = ({
  imgOblue,
  imgOwhite,
  titleO,
  descriptionO,
}: CardOffersProps) => {
  // eslint-disable-next-line
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        className="cardOffers"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div id="divImage">
          <img
            className="imgCard"
            src={isHovered ? imgOwhite : imgOblue}
            alt=""
          />
        </div>
        <h2 className="hDosCard">{titleO}</h2>
        <h3 className="hTresCard">{descriptionO}</h3>
      </div>
    </div>
  );
};

export default CardOffer;
