import React from 'react';
import { Navigate } from 'react-router-dom';

const getUserRole = () => localStorage.getItem('role');

const UserGuard = ({ children }) => {
  const role = getUserRole();
  return role === 'User' ? children : <Navigate to='/login' />;
};

export default UserGuard;
