import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const API_URL = "https://api.edamam.com/search";
const APP_ID = "a5de3521";
const APP_KEY = "28f8a20bd893e2740e68d4bbb349b977";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(
          `${API_URL}?r=${encodeURIComponent(id)}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();

        if (data.length > 0) {
          setRecipe(data[0]);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
       
      </div>
    );

  if (!recipe)
    return (
      <div className="text-center text-gray-600 text-xl font-semibold mt-10">
        Recipe not found! ❌
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white  shadow-xl rounded-2xl mt-10 border border-gray-200">
      {/* Recipe Title */}
      <h1 className="text-4xl font-extrabold  text-gray-900 mb-6 text-center">
        {recipe.label}
      </h1>

      {/* Recipe Image */}
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Recipe Source */}
      <p className="text-gray-700 text-lg text-center mt-4 italic">
        By <span className="font-semibold text-blue-600">{recipe.source}</span>
      </p>

      {/* Ingredients Section */}
      <div className="mt-6 p-4 bg-gray-50 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index} className="transition-all duration-300 hover:translate-x-2 hover:text-blue-500">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* View Full Recipe Button */}
      <div className="text-center mt-6">
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          View Full Recipe →
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
