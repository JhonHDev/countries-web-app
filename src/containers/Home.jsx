import React from 'react';

import MainContent from '../components/MainContent';

import CountriesList from '../components/CountriesList';

const Home = () => {
  return (
    <>
      <MainContent>
        <CountriesList />
      </MainContent>
    </>
  );
};

export default Home;
