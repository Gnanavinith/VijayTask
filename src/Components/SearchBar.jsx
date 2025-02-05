// components/SearchBar.jsx
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
    <form onSubmit={handleSearch} className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="px-4 py-2 border rounded-l-lg focus:outline-none"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;