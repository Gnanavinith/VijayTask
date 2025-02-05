// components/RecipeCard.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favoritesSlice';

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  // eslint-disable-next-line react/prop-types
  const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={recipe.image} alt={recipe.label} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{recipe.label}</h2>
        <p className="text-gray-600">{recipe.source}</p>
        <button
          onClick={handleFavorite}
          className={`mt-2 px-4 py-2 rounded-lg ${
            isFavorite ? 'bg-red-500' : 'bg-blue-500'
          } text-white`}
        >
          {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;