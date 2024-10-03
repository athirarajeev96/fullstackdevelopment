// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./utils/AppRoutes.jsx";
import Navbar from './components/Navbar'; // Ensure this import is correct
import 'index.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppRoutes />, // This will handle routing
    },
  ]);

  return (
    <div>
      <h1>Online Fitness Booking Platform</h1>
      <Navbar /> {/* Navbar should be included here */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
