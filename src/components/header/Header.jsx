import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import useAppTheme from '../../hooks/useTheme';
import { removeSingleCountry } from '../../actions/countriesActions';

import './Header.scss';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { handleToggleTheme } = useAppTheme();

  const { darkMode } = useSelector((state) => state.theme);

  const handleNavigation = () => {
    history.push(`/home`);
    dispatch(removeSingleCountry());
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className='wrapper'>
        <section className='header__container'>
          <h3 onClick={handleNavigation} className='header__title'>
            Where in the world?
          </h3>

          <button onClick={handleToggleTheme} className='main-button'>
            <i className={`far ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            <span>Dark Mode</span>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
