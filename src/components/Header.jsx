import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import '../assets/styles/components/Header.scss';

import ThemeContext from '../contexts/ThemeContext';

const Header = () => {
  const history = useHistory();

  const { themeState, setThemeState } = useContext(ThemeContext);

  const handleTheme = () => {
    setThemeState(!themeState);
  };

  const handleNavigation = () => {
    history.push(`/home`);
  };

  return (
    <header className={`header ${themeState ? 'dark' : ''}`}>
      <div className='wrapper'>
        <section className='header__container'>
          <h3 onClick={handleNavigation} className='header__title'>
            Where in the world?
          </h3>

          <button onClick={handleTheme} className='main-button'>
            <i className={`far ${themeState ? 'fa-sun' : 'fa-moon'}`}></i>
            <span>Dark Mode</span>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
