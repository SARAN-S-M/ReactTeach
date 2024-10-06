import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import NavigationBar from './menu';

function AppRoutes() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nav" element={<NavigationBar />} />
        </Routes>
        </Router>
    );
}

export default AppRoutes;