import { RootState } from 'redux/store';

export const selectCartModule = (state: RootState) => state.cart;
export const selectProductAmount = (state: RootState, id: string) =>
  selectCartModule(state).items[id] || 0;
export const selectCartTotalCount = (state: RootState) => selectCartModule(state).totalCount;
export const selectCartItems = (state: RootState) => selectCartModule(state).items;
