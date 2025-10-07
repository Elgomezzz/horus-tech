import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
// Layouts y Páginas
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ServiceCreatePage from './pages/admin/ServiceCreatePage';
import ServiceEditPage from './pages/admin/ServiceEditPage';
import BlogPage from './pages/BlogPage';
import PostDetailPage from './pages/PostDetailPage';
import PostCreatePage from './pages/admin/PostCreatePage';
import PostEditPage from './pages/admin/PostEditPage';


import QuotePage from './pages/QuotePage';
import ServiceDetailPage from './pages/ServicesPage';
import Footer from './components/Footer';

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
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <Link className="btn btn-primary" to="/cotizacion">Solicitar Cotización</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostDetailPage />} />
          
          {/* Rutas Protegidas de Administrador */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/servicios/nuevo" element={<ServiceCreatePage />} />
            <Route path="/admin/servicios/editar/:id" element={<ServiceEditPage />} />
            <Route path="/admin/posts/nuevo" element={<PostCreatePage />} />
            <Route path="/admin/posts/editar/:id" element={<PostEditPage />} />
          </Route>
        </Routes>
      </main>
      {/* Aquí podrías agregar un componente Footer */}
      <Footer />
    </Router>
  );
}


export default App;