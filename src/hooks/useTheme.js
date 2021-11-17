import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setAppTheme from '../actions/themeActions';

const useAppTheme = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    localStorage.setItem('theme', JSON.stringify(!darkMode));
    dispatch(setAppTheme(!darkMode));
  };

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const state = JSON.parse(localStorage.getItem('theme'));
      dispatch(setAppTheme(state));
    }
  }, [dispatch]);

  return {
    handleToggleTheme,
  };
};

export default useAppTheme;
