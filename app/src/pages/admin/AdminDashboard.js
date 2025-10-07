import React, { useState, useEffect } from "react";
import { getServices, deleteService } from "../../services/api";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const [services, setServices] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres borrar este servicio?")) {
      try {
        await deleteService(id);
        setServices(services.filter((s) => s.id !== id)); // Actualiza la UI
      } catch (error) {
        alert("No se pudo borrar el servicio.");
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Panel de Servicios</h1>
        <div>
          <Link to="/admin/servicios/nuevo" className="btn btn-primary me-2">
            Añadir Servicio
          </Link>
          <button onClick={logout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
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
                <Link
                  to={`/admin/servicios/editar/${service.id}`}
                  className="btn btn-sm btn-secondary me-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="btn btn-sm btn-danger"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
