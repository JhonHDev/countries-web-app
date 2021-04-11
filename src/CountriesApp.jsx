import React from 'react';

import './assets/styles/CountriesApp.scss';

import ThemeContext from './theme/ThemeContext';
import { useTheme } from './hooks/useTheme';

import CountriesPage from './containers/CountriesPage';

export const CountriesApp = () => {
  const { themeState, setThemeState } = useTheme();

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      <CountriesPage />
    </ThemeContext.Provider>
  );
};
