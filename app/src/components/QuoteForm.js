import React, { useState, useEffect } from 'react';
// Ahora importamos getServices para obtener la lista
import { getServices, submitQuote } from '../services/api'; 

const QuoteForm = () => {
  // Nuevo estado para almacenar la lista de servicios
  const [services, setServices] = useState([]);
  
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    service_id: '', // Este campo ahora se llenará dinámicamente
    project_details: '',
    has_domain: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // useEffect para cargar los servicios cuando el componente se monta
  useEffect(() => {
    getServices().then(data => {
      setServices(data);
    });
  }, []); // El array vacío asegura que se ejecute solo una vez

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(''); 

    if (!formData.client_name || !formData.client_email || !formData.service_id) {
      setSubmitMessage('Por favor, completa todos los campos requeridos: Nombre, Correo y Tipo de proyecto.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitQuote(formData);
      setSubmitMessage('¡Gracias! Tu solicitud ha sido enviada con éxito.');
    } catch (error) {
      setSubmitMessage('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5 p-5 bg-light" style={{borderRadius: '8px'}}>
      <h2 className="text-center mb-4">Cuéntanos sobre tu Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="client_name" className="form-label">Tu Nombre</label>
            <input type="text" name="client_name" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="client_email" className="form-label">Tu Correo</label>
            <input type="email" name="client_email" className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="service_id" className="form-label">¿Qué tipo de proyecto necesitas?</label>
          <select name="service_id" className="form-select" value={formData.service_id} onChange={handleChange}>
            <option value="">Selecciona un servicio...</option>
            {/* Aquí mapeamos la lista de servicios cargada desde la API */}
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="project_details" className="form-label">Danos más detalles sobre tu idea</label>
          <textarea name="project_details" rows="4" className="form-control" onChange={handleChange}></textarea>
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" name="has_domain" className="form-check-input" onChange={handleChange} />
          <label htmlFor="has_domain" className="form-check-label">Ya tengo un dominio y hosting</label>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-primary px-5" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
            </button>
        </div>
      </form>

      {submitMessage && <p className="text-center mt-3">{submitMessage}</p>}
    </div>
  );
};

export default QuoteForm;