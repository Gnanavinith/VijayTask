// components/Filters.jsx
import React from 'react';

const Filters = () => {
  return (
    <div className="flex justify-center my-4">
      <select className="px-4 py-2 border rounded-lg focus:outline-none">
        <option value="all">All</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
    </div>
  );
};

export default Filters;