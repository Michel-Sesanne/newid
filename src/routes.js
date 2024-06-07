import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/error" element={<Error />} />
        </Routes>
    )
}