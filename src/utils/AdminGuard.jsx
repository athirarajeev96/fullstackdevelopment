import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminGuard = ({ children }) => {
  const role = sessionStorage.getItem('role');
  return role === 'Admin' ? children : <Navigate to='/login' />;
};

export default AdminGuard;
