import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../features/recipesSlice";
import RecipeCard from "../Components/RecipeCard";
import "ldrs/tailChase"; // Import TailChase Loader

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes({ query: "pizza" }));
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center mt-5">
        <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center p-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default Home;
