import { configureStore } from '@reduxjs/toolkit'
//import authReducer from '../auth/store/authSlice';
import recetteReducer from '../assets/recettes/store/recetteSlice';
import favoriteReducer from '../assets/favorites/store/favoritesSlice';

export default configureStore({
	reducer: {
		//auth: authReducer,
		recette: recetteReducer,
		favorites: favoriteReducer,
	},
});
