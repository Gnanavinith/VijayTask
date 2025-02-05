// store.js
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipesSlice';
import favoritesReducer from './features/favoritesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
  },
});