import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Crearemos este archivo a continuación

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline">Transformamos Ideas en Soluciones Tecnológicas</h1>
        <p className="hero-subheadline">
          Desde desarrollo web hasta consultoría en la nube, te ayudamos a construir el futuro de tu negocio.
        </p>
        <Link to="/cotizacion" className="btn btn-primary btn-lg">
          Inicia tu Proyecto
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;