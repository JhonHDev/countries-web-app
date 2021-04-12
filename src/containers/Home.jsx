import React from 'react';

import MainContent from '../components/MainContent';
import Options from '../components/Options';
import CountriesList from '../components/CountriesList';

const Home = () => {
  return (
    <>
      <MainContent>
        <Options />
        <CountriesList />
      </MainContent>
    </>
  );
};

export default Home;
