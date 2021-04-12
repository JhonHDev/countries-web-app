import React from 'react';

import './assets/styles/CountriesApp.scss';

import ThemeContext from './theme/ThemeContext';
import { useTheme } from './hooks/useTheme';

import AppRouter from './router/AppRouter';

export const CountriesApp = () => {
  const { themeState, setThemeState } = useTheme();

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      <AppRouter />
    </ThemeContext.Provider>
  );
};
