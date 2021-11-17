import types from '../types';

const setAppTheme = (themeState) => ({
  type: types.toggleDarkMode,
  payload: themeState,
});

export default setAppTheme;
