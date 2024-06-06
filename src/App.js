import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppRoutes from './routes';

export default function App() {
  return (    
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>    
  );
}
