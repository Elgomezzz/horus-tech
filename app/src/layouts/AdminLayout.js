import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const { user, token } = useAuth();

    if (!token) {
        return <Navigate to="/login" />;
    }

    // Si hay token, muestra el contenido de la ruta anidada
    return (
        <div>
            {/* Aquí podrías poner un Navbar de Administrador */}
            <main className="container my-5">
                <Outlet /> 
            </main>
        </div>
    );
};

export default AdminLayout;