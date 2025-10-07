import React from 'react';
import PostForm from '../../components/admin/PostForm';
import { createPost } from '../../services/api';

const PostCreatePage = () => {
    return (
        <div>
            <h1>Añadir Nuevo Artículo</h1>
            <PostForm onSubmit={createPost} buttonText="Crear Artículo" />
        </div>
    );
};

export default PostCreatePage;