import React from 'react';
import { useSelector } from 'react-redux';

import './MainContent.scss';

const MainContent = ({ children }) => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <main className={`main ${darkMode ? 'dark' : ''}`}>
      <div className='wrapper'>{children}</div>
    </main>
  );
};

export default MainContent;
