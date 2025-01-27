import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../slice/PokemonSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
