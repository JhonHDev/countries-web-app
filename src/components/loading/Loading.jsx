import React from 'react';
import { useSelector } from 'react-redux';

import './Loading.scss';

const Loading = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section className='loading'>
      <div className={`spinner ${darkMode ? 'dark' : ''}`}></div>
    </section>
  );
};

export default Loading;
