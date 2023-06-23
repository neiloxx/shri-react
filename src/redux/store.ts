import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './services/moviesApi';
import { cartReducer } from './feature/cart';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([moviesApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
