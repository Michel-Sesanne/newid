import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import useScreenSize from "../../hooks/useScreenSize";
import "./layout.scss";
export default function Layout({ children }) {
  const isMobile = useScreenSize() <= 768;

  return (
    <div className="layout">
      {isMobile ? (
        <>
          <Navigation />
          <Header />
        </>
      ) : (
        <>
          <Header />
          <Navigation />
        </>
      )}
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
