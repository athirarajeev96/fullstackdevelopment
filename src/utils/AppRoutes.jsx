// src/utils/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import ClassSchedulePage from '../components/ClassSchedulePage';
import TrainerProfilePage from '../components/TrainerProfilePage'; // This will display the list of trainers
import BookingPage from '../components/BookingPage';
import AdminDashboardPage from '../components/AdminDashboardPage';
import UserDashboardPage from '../components/UserDashboardPage';
import TrainerFeedback from '../components/TrainerFeedback';
import Register from '../components/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/class-schedule" element={<ClassSchedulePage />} />
      <Route path="/trainers" element={<TrainerProfilePage />} /> {/* List of trainers */}
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      <Route path="/user-dashboard" element={<UserDashboardPage />} />
      <Route path="/trainer-feedback" element={<TrainerFeedback />} />
      {/* <Route path="*" element={<HomePage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
