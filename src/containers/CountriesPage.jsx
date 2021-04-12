import React from 'react';

import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Options from '../components/Options';
import CountriesList from '../components/CountriesList';

const CountriesPage = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Options />
        <CountriesList />
      </MainContent>
    </>
  );
};

export default CountriesPage;
