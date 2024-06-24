import "./home.scss";
import useScreenSize from "../../hooks/useScreenSize";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet-async";

const center = [43.9377, 4.9038]; //Carte centrée sur l'adresse de l'artisan

export default function Home() {
  const zoomLevel = useScreenSize() <= 768 ? 10 : 11;
  return (
    <div className="home">
      <Helmet>
        <title>Accueil - I.D Electricité & Serrurerie</title>
        <meta
          name="description"
          content="Informations pratiques sur I.D Electricité & Serrurerie"
        />
        <meta
          property="og:title"
          content="Accueil - I.D Electricité & Serrurerie"
        />
        <meta
          property="og:description"
          content="Informations pratiques sur I.D Electricité & Serrurerie"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.idelectriciteserrurerie.fr"
        />
        <meta
          property="og:image"
          content="https://www.idelectriciteserrurerie.fr/logo512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="zone">
        <h2>Zone d'intervention principale</h2>
        <MapContainer className="map" center={center} zoom={zoomLevel}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Circle
            center={center}
            radius={20000} // Rayon de 20 km
            color="yellow"
            fillColor="#ffdd0e"
            fillOpacity={0.1}
          />
        </MapContainer>
      </section>
      <section className="open-hours">
        <h2>Horaires</h2>
        <i className="fa-regular fa-clock"></i>
        <ul>
          <li className="hours-item">
            <span className="days">Lun - Ven</span>
            <span className="hours">7:30 - 18:00</span>
          </li>
          <li className="hours-item">
            <span className="days">Sam - Dim</span>
            <span className="hours"> Fermé     </span>
          </li>
        </ul>
        <p className="note">Majoration après 18h, week-end et férié de 60%</p>
      </section>
      <section className="pay-methods">
        <h2>Moyens de paiement</h2>
        <ul className="pay">
          <li className="pay-item">
            <i className="fa-solid fa-money-bill-wave"></i>
            <span>Espèces</span>
          </li>
          <li className="pay-item">
            <i className="fa-solid fa-money-check"></i>
            <span>Chèque</span>
          </li>
          <li className="pay-item">
            <i className="fa-solid fa-money-bill-transfer"></i>
            <span>Virement bancaire</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
