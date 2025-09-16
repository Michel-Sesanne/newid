import "./tarifsElectricien.scss";
import { Helmet } from "react-helmet-async";

export default function TarifsElectricien() {
  return (
    <div className="tarifs-e">
      <Helmet>
        <title>Tarifs Electricien - I.D Electricité & Serrurerie</title>
        <meta
          name="description"
          content="Découvrez nos tarifs pour les services d'électricité."
        />
        <meta
          property="og:title"
          content="Tarifs Electricien - I.D Electricité & Serrurerie"
        />
        <meta
          property="og:description"
          content="Découvrez nos tarifs pour les services d'électricité."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.idelectriciteserrurerie.fr/tarifsElectricien"
        />
        <meta
          property="og:image"
          content="https://www.idelectriciteserrurerie.fr/logo512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h2>GRILLE TARIFAIRE I.D ELECTRICITE (TTC)</h2>
      <p className="note">Majoration de 60% après 18h, week-end & fériés, urgences</p>
      <p>
        Pour toutes nos autres prestations, les tarifs se font sur devis (devis
        gratuit)
      </p>
      <ul>
        <li className="tarif-item">
          <span className="tarif-description">Déplacement :</span>
          <span className="tarif-price">50 € à 100 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">Recherche de panne :</span>
          <span className="tarif-price">160 € forfait</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture & pose interrupteur différentiel :
          </span>
          <span className="tarif-price">220 € à 350 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture & pose disjoncteur divisionnaire :
          </span>
          <span className="tarif-price">100 € à 290 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">Mesure résistance terre :</span>
          <span className="tarif-price">45 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">Pose d’un radiateur :</span>
          <span className="tarif-price">149 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Réparation prise électrique :
          </span>
          <span className="tarif-price">115 € à 175 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Installation tableau électrique monophasé standardisé:
          </span>
          <span className="tarif-price">859 € à 1599 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Pose de luminaire intérieur :
          </span>
          <span className="tarif-price">149 € à 359 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">Main-d’œuvre :</span>
          <span className="tarif-price">50 € à 100 €</span>
        </li>
      </ul>
    </div>
  );
}
