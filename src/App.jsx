// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './Pages/Home';
import Favorites from './Components/Favorites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar'; // Optional: Add a navigation bar
import RecipeDetail from "./Components/RecipeDetail";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white">
          {/* Navigation Bar (optional) */}
          <Navbar />

         
         
         

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;