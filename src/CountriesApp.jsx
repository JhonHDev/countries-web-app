import React from 'react';

import './styles/CountriesApp.scss';

import ThemeContext from './contexts/ThemeContext';
import CountriesContext from './contexts/CountriesContext';

import { useTheme } from './hooks/useTheme';
import { useGlobalData } from './hooks/useGlobalData';

import AppRouter from './router/AppRouter';

export const CountriesApp = () => {
  const { themeState, setThemeState } = useTheme();

  const [
    loading,
    allCountries,
    filteredCountries,
    setFilteredCountries,
    selectValue,
    setSelectValue,
    searchValue,
    setSearchValue,
  ] = useGlobalData();

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        filteredCountries,
        setFilteredCountries,
        loading,
        searchValue,
        setSearchValue,
        selectValue,
        setSelectValue,
      }}
    >
      <ThemeContext.Provider value={{ themeState, setThemeState }}>
        <AppRouter />
      </ThemeContext.Provider>
    </CountriesContext.Provider>
  );
};
