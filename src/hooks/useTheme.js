import { useEffect, useState } from 'react';

const initialState = () => {
  return JSON.parse(localStorage.getItem('themeState')) || false;
};

export const useTheme = () => {
  const [themeState, setThemeState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('themeState', JSON.stringify(themeState));
  }, [themeState]);

  return {
    themeState,
    setThemeState,
  };
};
