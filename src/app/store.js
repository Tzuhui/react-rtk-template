import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../services/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)