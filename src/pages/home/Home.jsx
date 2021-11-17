import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadCountries } from '../../actions/countriesActions';

import MainContent from '../../components/mainContent/MainContent';
import CountriesList from '../../components/countriesList/CountriesList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  return (
    <MainContent>
      <CountriesList />
    </MainContent>
  );
};

export default Home;
