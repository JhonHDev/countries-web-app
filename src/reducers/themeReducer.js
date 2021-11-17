import types from '../types';

const initialState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.toggleDarkMode:
      return {
        darkMode: action.payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
