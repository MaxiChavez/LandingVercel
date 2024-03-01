import cloud from "../../Resources/images/cloudComp.svg";
import baseDatos from "../../Resources/images/baseDatos.svg";
import contenedores from "../../Resources/images/contenedores.svg";

import desarroloP from "../../Resources/images/desaPerso.svg";
import "./FourIcons.css";

const FourIcons = () => {
  return (
    <div>
      <div id="tituloIcons">
        <h3 id="tituloIcon">
          Dominio de todas las tecnologías que tu empresa necesite.
        </h3>
      </div>
      <div id="iconos">
        <div className="fourIcons">
          <img src={cloud} alt="" />
        </div>
        <div id="baseDato" className="fourIcons">
          <img src={baseDatos} alt="" />
        </div>
        <div className="fourIcons">
          <img src={contenedores} alt="" />
        </div>
        <div className="fourIcons">
          <img src={desarroloP} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FourIcons;
