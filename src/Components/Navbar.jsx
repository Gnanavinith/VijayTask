// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Recipe App
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/favorites" className="text-white hover:text-blue-200">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;