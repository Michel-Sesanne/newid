import "./footer.scss";
import { Link } from "react-router-dom";
import imageElectricite from "./image-electricite.jpg";
import imageSerrurerie from "./image-serrurerie.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="image-electricite">
        <img
          className="illustration"
          src={imageElectricite}
          alt="illustration électricité"
        />
      </div>
      <div className="text">
        <div className="haut">
          <div className="white">
            <p>SESANNE François</p>
          </div>
          <div>
            <p>
              n° SIRET :<span className="siret"> 40290340500031</span>
            </p>
          </div>
          <div className="white">
            <p>06.34.82.65.27</p>
          </div>
        </div>
        <div className="milieu">
          <p>Assurance décennale APRIL</p>
        </div>
        <div className="bas">
          <div className="white">
            <a className="mail-link" href="mailto:i.d.electrique84@gmail.com">
              i.d.electrique84@gmail.com
            </a>
          </div>
          <div className="white">
            <p>
              <Link to="/mentionsLegales/">Mentions légales</Link>
            </p>
          </div>
          <div>
            <p>&copy; 2024 I.D Electricité&Serrurerie. Tous droits réservés.</p>
          </div>
        </div>
      </div>
      <div className="image-serrurerie">
        <img
          className="illustration"
          src={imageSerrurerie}
          alt="illustration serrurerie"
        />
      </div>
    </footer>
  );
}
