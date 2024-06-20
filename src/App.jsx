// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList'; // Adjusted import path
import ViewUser from './components/ViewUser'; // Adjusted import path
import AddUser from './components/AddUser'; // Adjusted import path

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/view-user/:id" element={<ViewUser />} />
      <Route path="/add-user" element={<AddUser />} />
    </Routes>
  </Router>
);

export default AppRouter;
