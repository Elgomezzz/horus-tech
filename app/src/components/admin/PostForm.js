import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ onSubmit, initialData = {}, buttonText }) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        image_url: '',
        ...initialData
    });
    const navigate = useNavigate();

    useEffect(() => {
        setPost(prev => ({ ...prev, ...initialData }));
    }, [initialData]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(post);
            navigate('/admin/dashboard');
        } catch (error) {
            alert('Hubo un error al guardar el artículo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="mb-3">
                <label className="form-label">Título del Artículo</label>
                <input type="text" name="title" value={post.title} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">URL de la Imagen</label>
                <input type="url" name="image_url" value={post.image_url} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Contenido</label>
                <textarea name="body" value={post.body} onChange={handleChange} className="form-control" rows="10" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
            <button type="button" onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary ms-2">Cancelar</button>
        </form>
    );
};

export default PostForm;