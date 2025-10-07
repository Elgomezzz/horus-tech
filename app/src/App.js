import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
// Layouts y Páginas
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ServiceCreatePage from './pages/admin/ServiceCreatePage'; // <--- NUEVO
import ServiceEditPage from './pages/admin/ServiceEditPage'; 


import QuotePage from './pages/QuotePage';
import ServiceDetailPage from './pages/ServicesPage';

// Componente simple para el Header
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      {/* Puedes cambiar el nombre de la marca aquí también */}
      <Link className="navbar-brand" to="/"><b>HORUS TECH</b></Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/servicios">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <Link className="btn btn-primary" to="/cotizacion">Solicitar Cotización</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Asigna un componente a la ruta raíz para que no quede vacía */}
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cotizacion" element={<QuotePage />} />
          <Route path="/servicios/:id" element={<ServiceDetailPage />} />
          
          {/* Rutas Protegidas de Administrador */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/servicios/nuevo" element={<ServiceCreatePage />} />
            <Route path="/admin/servicios/editar/:id" element={<ServiceEditPage />} />
          </Route>
        </Routes>
      </main>
      {/* Aquí podrías agregar un componente Footer */}
    </Router>
  );
}


export default App;