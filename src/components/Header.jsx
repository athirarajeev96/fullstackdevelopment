// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FitFlex</h1>
        <nav className="space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/class-schedule" className="hover:underline">Class Schedule</Link>
          <Link to="/trainers" className="hover:underline">Trainers</Link>
          <Link to="/trainer-feedback" className="hover:underline">Trainer Feedback</Link> {/* Add this line */}
          <Link to="/" className="hover:underline">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
