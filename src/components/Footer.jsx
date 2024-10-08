// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} FitFlex. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{' '}
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
