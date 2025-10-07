import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ServiceForm from '../../components/admin/ServiceForm';
import { getServiceById, updateService } from '../../services/api';

const ServiceEditPage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        getServiceById(id).then(setService);
    }, [id]);

    const handleUpdate = async (serviceData) => {
        await updateService(id, serviceData);
    };

    if (!service) return <div>Cargando...</div>;

    return (
        <div>
            <h1>Editar Servicio</h1>
            <ServiceForm 
                key={service.id} 
                onSubmit={handleUpdate} 
                initialData={service} 
                buttonText="Actualizar Servicio" 
            />
        </div>
    );
};

export default ServiceEditPage;