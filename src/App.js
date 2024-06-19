import { HashRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import AppRoutes from './routes';
import JsonLd from './components/JsonLd';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <JsonLd />
          <AppRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
