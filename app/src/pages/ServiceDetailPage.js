import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../services/api';

const ServiceDetailPage = () => {
  const { id } = useParams(); // Obtiene el ID del servicio desde la URL
  const [service, setService] = useState(null);

  useEffect(() => {
    getServiceById(id).then(data => setService(data));
  }, [id]);

  if (!service) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={service.image_url} alt={service.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{service.name}</h1>
          {service.isOnPromotion && <span className="badge bg-danger mb-3">En Promoción</span>}
          <p className="fs-4 fw-bold">${service.price} USD</p>
          <p className="text-muted">Slots disponibles: {service.quantity}</p>
          <p>{service.long_description}</p>
          <button className="btn btn-primary">Solicitar este Servicio</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;