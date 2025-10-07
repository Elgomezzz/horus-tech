import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceForm = ({ onSubmit, initialData = {}, buttonText }) => {
    const [service, setService] = useState({
        name: '',
        short_description: '',
        long_description: '',
        price: '',
        image_url: '',
        quantity: '',
        isOnPromotion: false,
        category: '',
        ...initialData
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setService(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(service);
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error al guardar el servicio', error);
            alert('Hubo un error al guardar el servicio.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label className="form-label">Nombre del Servicio</label>
                    <input type="text" name="name" value={service.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Categoría</label>
                    <input type="text" name="category" value={service.category} onChange={handleChange} className="form-control" required />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Descripción Corta</label>
                <input type="text" name="short_description" value={service.short_description} onChange={handleChange} className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Descripción Larga</label>
                <textarea name="long_description" value={service.long_description} onChange={handleChange} className="form-control" rows="4" required></textarea>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label">Precio (USD)</label>
                    <input type="number" step="0.01" name="price" value={service.price} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Cantidad (Slots Disponibles)</label>
                    <input type="number" name="quantity" value={service.quantity} onChange={handleChange} className="form-control" required />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">URL de la Imagen</label>
                <input type="url" name="image_url" value={service.image_url} onChange={handleChange} className="form-control" required />
            </div>

            <div className="form-check mb-4">
                <input
                    type="checkbox"
                    name="isOnPromotion"
                    checked={service.isOnPromotion}
                    onChange={handleChange}
                    className="form-check-input"
                    id="isOnPromotionCheck"
                />
                <label className="form-check-label" htmlFor="isOnPromotionCheck">
                    ¿Está en promoción?
                </label>
            </div>

            <button type="submit" className="btn btn-primary">{buttonText}</button>
            <button type="button" onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary ms-2">Cancelar</button>
        </form>
    );
};

export default ServiceForm;