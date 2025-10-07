import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// --- FUNCIONES PÚBLICAS ---

export const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        throw error;
    }
};

export const getServiceById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/services/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el servicio ${id}:`, error);
        throw error;
    }
};

export const submitQuote = async (quoteData) => {
    try {
        const response = await axios.post(`${API_URL}/quotes`, quoteData);
        return response.data;
    } catch (error) {
        console.error('Error al enviar la cotización:', error);
        throw error;
    }
};

// --- FUNCIONES PROTEGIDAS (ADMIN) ---

export const createService = async (serviceData) => {
    try {
        const response = await axios.post(`${API_URL}/services`, serviceData);
        return response.data;
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        throw error;
    }
};

export const updateService = async (id, serviceData) => {
    try {
        const response = await axios.put(`${API_URL}/services/${id}`, serviceData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el servicio:', error);
        throw error;
    }
};

export const deleteService = async (id) => {
    try {
        await axios.delete(`${API_URL}/services/${id}`);
    } catch (error) {
        console.error('Error al borrar el servicio:', error);
        throw error;
    }
};

export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        throw error;
    }
};

export const getPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${slug}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el post ${slug}:`, error);
        throw error;
    }
};


export const createPost = async (postData) => {
    try {
        // Asumimos que la imagen es una URL, si subes archivos sería diferente
        const response = await axios.post(`${API_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error('Error al crear el post:', error);
        throw error;
    }
};

export const updatePost = async (id, postData) => {
    try {
        // Laravel maneja PUT/PATCH con POST y un campo _method si es necesario, pero axios.put funciona.
        const response = await axios.put(`${API_URL}/posts/${id}`, postData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el post:', error);
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        await axios.delete(`${API_URL}/posts/${id}`);
    } catch (error) {
        console.error('Error al borrar el post:', error);
        throw error;
    }
};