import React from 'react';
import { createRoot } from 'react-dom/client';
import DishPage from './recipe';

const recipeRoot = createRoot(document.getElementById('recipe-root'));
recipeRoot.render(<DishPage />);