import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/mentionsLegales/" element={<MentionsLegales />} />
           <Route path="/error" element={<Error />} />
        </Routes>
    )
}