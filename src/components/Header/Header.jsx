import logoWebp from "./logo.webp";
import logoPng from "./logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header id="header">
      <picture>
        <source srcSet={logoWebp} type="image/webp" media="(max-width: 767px)" />
        <source srcSet={logoPng} type="image/png" />
        <img src={logoPng} className="App-logo" alt="logo" rel="preload"/>
      </picture>

      <div className="text">
        <div>
          <h1>
          Electricien et Serrurier <br />
          Avignon et ses alentours
        </h1>
        <p>Intervention - Dépannage</p>
        <p>Réparation - Urgences 7j/24h</p>
        </div>
        <div>
          <a
          href="https://www.facebook.com/I.D.Electrique84?locale=fr_FR"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        </div>        
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
