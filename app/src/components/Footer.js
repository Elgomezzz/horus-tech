import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">

          {/* Columna 1: Logo y Redes Sociales */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-brand">HORUS TECH</h5>
            <p>Transformamos Ideas en Soluciones Tecnológicas.</p> 
            <div className="social-icons">
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-heading">Navegación</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Inicio</Link></li>
              <li><Link to="/servicios" className="footer-link">Servicios</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/cotizacion" className="footer-link">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-heading">Nuestros Servicios</h5>
            <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Desarrollo Web</a></li>
                <li><a href="#" className="footer-link">Consultoría en la Nube</a></li>
                <li><a href="#" className="footer-link">Soporte TI</a></li>
                <li><a href="#" className="footer-link">Marketing Digital</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-heading">Contacto</h5>
            <ul className="list-unstyled">
              <li>Soacha, Cundinamarca</li>
              <li>contacto@horustech.com</li>
              <li>+57 300 123 4567</li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p className="mb-0">&copy; {currentYear} Horus Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;