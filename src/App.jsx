// src/AppRouter.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList'; // Adjusted import path
import ViewUser from './components/ViewUser'; // Adjusted import path
import AddUser from './components/AddUser'; // Adjusted import path
import axios from 'axios';

const AppRouter = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6668fdc92e964a6dfed37d7c.mockapi.io/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addUser = (newUser) => {
    setUserData(prevData => [...prevData, newUser]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList userData={userData} />} />
        <Route path="/view-user/:id" element={<ViewUser />} />
        <Route path="/add-user" element={<AddUser addUser={addUser} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
