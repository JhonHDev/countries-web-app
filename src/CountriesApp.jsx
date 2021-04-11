import React from 'react';

import './assets/styles/CountriesApp.scss';

import ThemeContext from './theme/ThemeContext';
import { useTheme } from './hooks/useTheme';

import Header from './components/Header';

export const CountriesApp = () => {
  const { themeState, setThemeState } = useTheme();

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      <Header />
    </ThemeContext.Provider>
  );
};
