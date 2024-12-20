import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/auth/AuthGuard';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/portfolio';
import Login from '../pages/Login';
import PortfolioDashboard from '../pages/admin/PortfolioDashboard';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin/*"
        element={
          <AuthGuard>
            <Routes>
              <Route path="projects" element={<PortfolioDashboard />} />
            </Routes>
          </AuthGuard>
        }
      />
    </Routes>
  );
}