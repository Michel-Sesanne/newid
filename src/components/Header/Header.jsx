import logo from "./logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />

      <div className="text">
        <h1>
          Electricien et Serrurier <br />
          Avignon et ses alentours
        </h1>
        <p>Intervention - Réparation</p>
        <p>Dépannage 7j/24h</p>
        <a
          href="https://www.facebook.com/I.D.Electrique84?locale=fr_FR"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>

      <div className="link">
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <a
            className="phone-link"
            href="tel:0033634826527"
            aria-label=" 06 34 82 65 27"
          >
            <span>06 34 82 65 27</span>
          </a>
        </div>

        <div className="mail">
          <i className="fa-solid fa-envelope"></i>
          <a className="mail-link" href="mailto:i.d.electrique84@gmail.com">
            i.d.electrique84@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}
