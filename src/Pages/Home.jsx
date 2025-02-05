// pages/Home.jsx
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipesSlice';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes({ query: 'pizza' }));
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default Home;