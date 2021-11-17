import React from 'react';
import { Provider } from 'react-redux';

import './styles/CountriesApp.scss';

import store from './store';

import AppRouter from './router/AppRouter';

export const CountriesApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
