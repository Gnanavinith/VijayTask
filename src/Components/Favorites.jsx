// components/Favorites.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../features/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <div key={recipe.uri} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.label} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.label}</h3>
                <p className="text-gray-600">{recipe.source}</p>
                <button
                  onClick={() => dispatch(removeFavorite(recipe))}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
