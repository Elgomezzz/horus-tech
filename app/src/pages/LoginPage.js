import React, { useState } from 'react';
import './LoginPage.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/admin/dashboard'); // Redirige al dashboard del admin
        } catch (err) {
            setError('Credenciales inválidas. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="container-fluid login-container">
            <div className="row g-0">
                <div className="col-md-6 login-form-section p-5">
                    <h3 className="mb-4">Acceso de Administrador</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-dark w-100 mt-3">Ingresar</button>
                    </form>
                </div>
                <div className="col-md-6 d-none d-md-flex login-banner-section">
                  {/* ... tu banner ... */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;