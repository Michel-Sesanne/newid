import "./home.scss";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [43.9377, 4.9038];

export default function Home() {
  return (
    <div className="home">
      <h2>Zone d'intervention principale</h2>
      <MapContainer
        className="map"
        center={center}
        zoom={11}
      >
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
    </div>
  );
}
