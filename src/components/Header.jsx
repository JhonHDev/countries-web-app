import React, { useContext } from 'react';

import '../assets/styles/components/Header.scss';

import ThemeContext from '../theme/ThemeContext';

const Header = () => {
  const { themeState, setThemeState } = useContext(ThemeContext);

  const handleTheme = () => {
    setThemeState(!themeState);
  };

  return (
    <header className={`header ${themeState ? 'dark' : ''}`}>
      <div className='wrapper'>
        <section className='header__container'>
          <h3 className='header__title'>Where in the world?</h3>

          <button onClick={handleTheme} className='header__btn'>
            <i className={`far ${themeState ? 'fa-sun' : 'fa-moon'}`}></i>
            <span>Dark Mode</span>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
