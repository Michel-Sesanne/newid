import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import TarifsElectricien from './pages/TarifsElectricien/TarifsElectricien';
import TarifsSerrurier from './pages/TarifsSerrurier/TarifsSerrurier';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/tarifsElectricien" element={<TarifsElectricien />} />
           <Route path="/tarifsSerrurier" element={<TarifsSerrurier />} />
           <Route path="/mentionsLegales" element={<MentionsLegales />} />
           <Route path="/error" element={<Error />} />
        </Routes>
    )
}