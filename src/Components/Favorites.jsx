// components/Favorites.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../features/favoritesSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="p-6 min-h-screen bg-grey">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Favorite Recipes ❤️
      </h2>

      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">
          No favorites added yet. Start adding some delicious recipes! 🍽️
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <div
              key={recipe.uri}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Remove Button - Positioned Top Right */}
              <button
                onClick={() => dispatch(removeFavorite(recipe))}
                className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:bg-red-600"
              >
                ❌
              </button>

              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.label}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              {/* Recipe Details */}
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">
                  {recipe.label}
                </h3>
                <p className="text-gray-600 text-sm mt-1">By {recipe.source}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
