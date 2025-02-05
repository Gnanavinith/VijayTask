import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const favoriteCount = useSelector((state) => state.favorites.length);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        {/* Logo */}
        <Link to="/recipeCard" className="text-gray-800 text-2xl font-semibold tracking-wider hover:text-blue-600">
          Recipe App
        </Link>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-800 text-lg font-medium hover:text-blue-600">
            Home
          </Link>
          
          <Link to="/favorites" className="relative text-gray-800 text-lg font-medium hover:text-blue-600">
            Favorites
            {favoriteCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {favoriteCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="flex flex-col items-center space-y-4">
            <SearchBar />
            <Link to="/recipeCard" className="text-gray-800 text-lg font-medium hover:text-blue-600">
              Home
            </Link>
            <Link to="/favorites" className="relative text-gray-800 text-lg font-medium hover:text-blue-600">
              Favorites
              {favoriteCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {favoriteCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
