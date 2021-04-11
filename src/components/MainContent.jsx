import React from 'react';

import '../assets/styles/components/MainContent.scss';

const MainContent = ({ children }) => {
  return (
    <main className='main'>
      <div className='wrapper'>{children}</div>
    </main>
  );
};

export default MainContent;
