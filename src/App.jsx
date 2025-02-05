// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './Pages/Home';
import Favorites from './Components/Favorites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import Filters from './Components/Filters';
import Navbar from './Components/Navbar'; // Optional: Add a navigation bar

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {/* Navigation Bar (optional) */}
          <Navbar />

          {/* Search and Filters */}
          <SearchBar />
          <Filters />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;