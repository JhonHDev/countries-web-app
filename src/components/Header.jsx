import React from 'react';

import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <section className='header__container'>
          <h3 className='header__title'>Where in the world?</h3>

          <button className='header__btn'>
            <i className='far fa-moon'></i>
            <span>Dark Mode</span>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
