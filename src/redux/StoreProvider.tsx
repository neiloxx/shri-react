'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { JSX } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
