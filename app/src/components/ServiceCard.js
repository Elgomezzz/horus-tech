import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom'; 


const ServiceCard = ({ service }) => {
  return (
    <div className="col">
      {/* El Link envuelve toda la tarjeta para hacerla clickeable */}
      <Link to={`/servicios/${service.id}`} className="service-card-link">
        <div className="service-card h-100">
          {/* Usamos la imagen en lugar del ícono */}
          <img src={service.image_url} alt={service.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{service.name}</h5>
            {/* Mostramos el precio */}
            <p className="card-text fw-bold fs-5">${service.price} USD</p>
            {/* Mostramos si está en promoción */}
            {service.isOnPromotion && <span className="badge bg-danger">En Promoción</span>}
          </div>
        </div>
      </Link>
    </div>
    
  );
};

export default ServiceCard;