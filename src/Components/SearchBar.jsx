import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../features/recipesSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchRecipes({ query }));
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="px-6 py-3 w-80 border-none border-gray-300 shadow-2xl rounded-l-lg border-r-0 transition-all duration-300  hover:shadow-lg"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
