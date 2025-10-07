import React, { useState, useEffect } from "react";
import { getServices, deleteService, getPosts, deletePost } from '../../services/api';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const [services, setServices] = useState([]);
  const [posts, setPosts] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    
    getServices().then(setServices);
    getPosts().then(setPosts); 
  }, []);

  
  const handleServiceDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres borrar este servicio?")) {
      try {
        await deleteService(id);
        setServices(services.filter((s) => s.id !== id));
      } catch (error) {
        alert("No se pudo borrar el servicio.");
      }
    }
  };

  const handlePostDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres borrar este artículo?')) {
        try {
            await deletePost(id);
            setPosts(posts.filter(p => p.id !== id));
        } catch (error) {
            alert('No se pudo borrar el artículo.');
        }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Panel de Administración</h1>
        <button onClick={logout} className="btn btn-danger">Cerrar Sesión</button>
      </div>
      
      {/* --- SECCIÓN DE SERVICIOS --- */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Servicios</h2>
        <Link to="/admin/servicios/nuevo" className="btn btn-primary">Añadir Servicio</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.category}</td>
              <td>${service.price}</td>
              <td>
                <Link to={`/admin/servicios/editar/${service.id}`} className="btn btn-sm btn-secondary me-2">Editar</Link>
                <button onClick={() => handleServiceDelete(service.id)} className="btn btn-sm btn-danger">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="my-5" />

      {}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Blog</h2>
        <Link to="/admin/posts/nuevo" className="btn btn-primary">Añadir Post</Link>
      </div>
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              {posts.map(post => (
                  <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      {/* Asumimos que la API devuelve el nombre del autor */}
                      <td>{post.author ? post.author.name : 'N/A'}</td>
                      <td>
                          <Link to={`/admin/posts/editar/${post.id}`} className="btn btn-sm btn-secondary me-2">Editar</Link>
                          <button onClick={() => handlePostDelete(post.id)} className="btn btn-sm btn-danger">Borrar</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;