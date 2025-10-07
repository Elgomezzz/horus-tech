import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { getServices } from '../services/api';

const HomePage = () => {
  const [featuredServices, setFeaturedServices] = useState([]);

  useEffect(() => {
    // Obtenemos todos los servicios y mostramos solo los 3 primeros
    getServices().then(allServices => {
      setFeaturedServices(allServices.slice(0, 3));
    });
  }, []);

  return (
    <div>
      {/* SECCIÓN 1: HERO */}
      <HeroSection />

      {/* SECCIÓN 2: SERVICIOS DESTACADOS */}
      <div className="container my-5 py-5">
        <h2 className="text-center mb-5">Nuestros Servicios Principales</h2>
        <div className="row g-4">
          {featuredServices.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
            <Link to="/servicios" className="btn btn-outline-dark btn-lg">Ver todos los servicios</Link>
        </div>
      </div>

      {/* SECCIÓN 3: POR QUÉ ELEGIRNOS */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-5">¿Por Qué Horus Tech?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>Equipo Experto</h3>
              <p className="text-muted">Profesionales apasionados y con años de experiencia en el sector tecnológico.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Soluciones a Medida</h3>
              <p className="text-muted">No usamos plantillas. Creamos soluciones únicas para problemas específicos.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Resultados Comprobados</h3>
              <p className="text-muted">Nos enfocamos en entregar proyectos que generan un impacto real y medible.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* SECCIÓN 4: LLAMADO A LA ACCIÓN FINAL */}
      <div className="container my-5 py-5 text-center">
        <h2>¿Listo para empezar tu proyecto?</h2>
        <p className="lead text-muted my-3">Hablemos de cómo podemos ayudarte a alcanzar tus objetivos.</p>
        <Link to="/cotizacion" className="btn btn-primary btn-lg">
          Solicitar Cotización
        </Link>
      </div>
    </div>
  );
};

export default HomePage;