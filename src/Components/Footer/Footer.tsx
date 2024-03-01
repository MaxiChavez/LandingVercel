import "./Footer.css";
import imgTel from "../../Resources/images/telefono.svg";
import imgUbicacion from "../../Resources/images/ubicacion.png";
import imgMail from "../../Resources/images/correo.png";
import logoF from "../../Resources/images/LOGOFot.svg";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footerTop">
        <div className="logoFooter">
          <img id="logoFooter" src={logoF} alt="Logo-Empresa" />
        </div>
        <div className="icons">
          <img src={imgTel} alt="Logo-Tel" />
          <div className="texto">
            <h3>Télefonos:</h3>
            <h3>
              <a className="wap" href="https://wa.me/34654837508">
                +34 654-83-75-08
              </a>
            </h3>
            <h3>
              <a className="wap" href="https://wa.me/5491149468452">
                +54-911-4946-8452
              </a>
            </h3>
          </div>
        </div>
        <div className="icons">
          <img src={imgUbicacion} alt="Logo-Ubicacion" />
          <div className="texto">
            <h3>Ubicación:</h3>
            <h3>España, Málaga.</h3>
            <h3>Argentina, Bs As.</h3>
          </div>
        </div>
        <div className="icons">
          <img src={imgMail} id="mailLogo" alt="Logo-Mail" />
          {/* <div className="texto">
            <h3>Mail:</h3>
            <h3>info@impacto-web.com </h3>
          </div> */}
          <h3>
            <h3>Mail:</h3>
            <a className="wap" href="mailto:info@impacto-web.com">
              info@impacto-web.com
            </a>
          </h3>
        </div>
      </div>

      <div className="footerBottom">
        <div className="legal">
          <p>© 2023 ALIGNMENT WEBSITES ®.</p>
          <p>Terms and Conditions.</p>
          <p> All rights reserved.</p>
          <p>| Privacy Policy |</p>
        </div>
      </div>
    </div>
  );
};
