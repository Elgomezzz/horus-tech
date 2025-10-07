// src/pages/ServicesPage.js

import React, { useState, useEffect } from 'react';
// Importamos el componente ServiceCard y la función getServices
import ServiceCard from '../components/ServiceCard';
import { getServices } from '../services/api'; // <--- CORRECCIÓN IMPORTANTE

const ServicesPage = () => { // <--- CORRECCIÓN IMPORTANTE
  const [services, setServices] = useState([]); // <--- CORRECCIÓN IMPORTANTE
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices(); // <--- CORRECIÓN IMPORTANTE
        setServices(data);
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center my-5"><h2>Cargando servicios...</h2></div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;