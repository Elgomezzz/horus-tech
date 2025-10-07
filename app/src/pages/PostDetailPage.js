import React, { useState, useEffect } from 'react';
import { getPostBySlug } from '../services/api';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
    const [post, setPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        getPostBySlug(slug).then(setPost);
    }, [slug]);

    if (!post) return <div>Cargando...</div>;

    return (
        <div className="container my-5">
            <img src={post.image_url} className="img-fluid mb-4" alt={post.title} />
            <h1>{post.title}</h1>
            <p className="text-muted">Escrito por: {post.author.name}</p>
            <hr/>
            <div>{post.body}</div>
        </div>
    );
};

export default PostDetailPage;