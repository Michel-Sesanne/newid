import "./tarifsSerrurier.scss";
import { Helmet } from "react-helmet-async";

export default function TarifsSerrurier() {
  return (
    <div className="tarifs-s">
      <Helmet>
        <title>Tarifs Serrurier - I.D Electricité & Serrurerie</title>
        <meta
          name="description"
          content="Découvrez nos tarifs pour les services d'électricité."
        />
        <meta
          property="og:title"
          content="Tarifs Serrurier - I.D Electricité & Serrurerie"
        />
        <meta
          property="og:description"
          content="Découvrez nos tarifs pour les services de serrurerie."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.idelectriciteserrurerie.fr/tarifsSerrurier"
        />
        <meta
          property="og:image"
          content="https://www.idelectriciteserrurerie.fr/logo512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h2>GRILLE TARIFAIRE I.D SERRURERIE (TTC)</h2>
      <p className="note">Majoration de 60% après 18h, week-end et fériés, urgences</p>
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
          <span className="tarif-description">
            Ouverture de porte claquée :
          </span>
          <span className="tarif-price">100 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Ouverture de porte classique verrouillée sans remplacement de pièce
            :
          </span>
          <span className="tarif-price">130 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Ouverture de porte blindée verrouillée sans remplacement de pièce :
          </span>
          <span className="tarif-price">160 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Ouverture d'une boîte à lettres :
          </span>
          <span className="tarif-price">75 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Dépose & pose cylindre simple type européen :
          </span>
          <span className="tarif-price">75 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture et pose d'une poignée blindée à partir de :
          </span>
          <span className="tarif-price">300 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture et pose de cornière anti-pince à partir de :
          </span>
          <span className="tarif-price">300 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture et pose de Blindage Parisien à partir de :
          </span>
          <span className="tarif-price">2990 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture et pose de paumelles blindées avec barre de pivotement :
          </span>
          <span className="tarif-price">750 € à 900 €</span>
        </li>
        <li className="tarif-item">
          <span className="tarif-description">
            Fourniture et pose Serrures carénées avec 5 points de fermeture à
            partir de :
          </span>
          <span className="tarif-price">1290 €</span>
        </li>
      </ul>
    </div>
  );
}
