import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <main className="content">{children}</main>           
      <Footer />    
    </div>
  );
}