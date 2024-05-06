import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de importar el contexto de autenticación

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Obtiene el estado de autenticación del contexto
  const location = useLocation(); // Obtiene la ubicación actual

  // Verifica si el usuario está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />; // Redirige a la página de inicio de sesión si no está autenticado
  }

  return children; // Renderiza los hijos si el usuario está autenticado
};

export default PrivateRoute;