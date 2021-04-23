import React, { useContext } from 'react';

import '../assets/styles/components/MainContent.scss';

import ThemeContext from '../contexts/ThemeContext';

const MainContent = ({ children }) => {
  const { themeState } = useContext(ThemeContext);

  return (
    <main className={`main ${themeState ? 'dark' : ''}`}>
      <div className='wrapper'>{children}</div>
    </main>
  );
};

export default MainContent;
