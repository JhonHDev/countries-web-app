import React, { useContext } from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import './Loading.scss';

const Loading = () => {
  const { themeState } = useContext(ThemeContext);

  return (
    <section className='loading'>
      <div className={`spinner ${themeState ? 'dark' : ''}`}></div>
    </section>
  );
};

export default Loading;
