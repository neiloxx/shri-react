import { createSlice } from '@reduxjs/toolkit';
import { CartState } from 'types/movieApi';

const initialState: CartState = {
  items: {},
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state.items[payload] || 0;
      state.items[payload] = count + 1;
      state.totalCount += 1;
    },
    decrement: (state, { payload }) => {
      const count = state.items[payload];

      if (!count) {
        return;
      }
      state.totalCount -= 1;

      if (count === 1) {
        delete state.items[payload];
        return;
      }

      state.items[payload] = count - 1;
    },
    deleteItem: (state, { payload }) => {
      const count = state.items[payload];
      state.totalCount -= count;
      delete state.items[payload];
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
