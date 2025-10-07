import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://127.0.0.1:8000/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Intenta obtener el usuario si hay un token
            axios.get(`${API_URL}/user`)
                .then(response => setUser(response.data))
                .catch(() => {
                    // Si el token es inválido, lo limpiamos
                    localStorage.removeItem('token');
                    setToken(null);
                });
        }
    }, [token]);

    const login = async (email, password) => {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        const { token: newToken, user: newUser } = response.data;
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(newUser);
    };

    const logout = () => {
        axios.post(`${API_URL}/logout`).finally(() => {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
            delete axios.defaults.headers.common['Authorization'];
        });
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};