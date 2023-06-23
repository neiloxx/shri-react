import { createSlice } from '@reduxjs/toolkit';
import { CartState } from 'types/movieApi';

const initialState: CartState = {
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state[payload] || 0;
      state[payload] = count + 1;
      state.totalCount += 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload];

      if (!count) {
        return;
      }
      state.totalCount -= 1;

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
