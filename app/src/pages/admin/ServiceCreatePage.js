import React from 'react';
import ServiceForm from '../../components/admin/ServiceForm';
import { createService } from '../../services/api';

const ServiceCreatePage = () => {
    const handleCreate = async (serviceData) => {
        await createService(serviceData);
    };

    return (
        <div>
            <h1>Añadir Nuevo Servicio</h1>
            <ServiceForm onSubmit={handleCreate} buttonText="Crear Servicio" />
        </div>
    );
};

export default ServiceCreatePage;