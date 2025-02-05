import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoritesSlice";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);

  const handleFavorite = (e) => {
    e.preventDefault(); // Prevents navigating when clicking the button
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <Link
      to={`/recipe/${encodeURIComponent(recipe.uri)}`}
      className="relative max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mt-10"
    >
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-56 object-cover rounded-t-2xl"
      />

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className={`absolute top-4 right-4 px-2 py-1 text-sm rounded-full text-gray-50 transition-all duration-300 ${
          isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue"
        } shadow-md focus:outline-none`}
      >
        {isFavorite ? "❤️ Favorited" : "💙 Add to Favorites"}
      </button>

      {/* Recipe Details */}
      <div className="p-4 bg-white/60 backdrop-blur-lg rounded-b-2xl">
        <h2 className="text-xl font-semibold text-gray-800">{recipe.label}</h2>

        {/* Short Description - Show 3 Ingredients */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-2xl mt-3">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            🍴 Quick Recipe Preview:
          </h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            {recipe.ingredientLines.slice(0, 3).map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                ✅ {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
