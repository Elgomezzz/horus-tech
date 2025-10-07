import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Nuestro Blog</h1>
            <div className="row g-4">
                {posts.map(post => (
                    <div key={post.id} className="col-md-4">
                        <div className="card h-100">
                            <img src={post.image_url} className="card-img-top" alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-muted">Por: {post.author.name}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/blog/${post.slug}`} className="btn btn-primary">Leer Más</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;