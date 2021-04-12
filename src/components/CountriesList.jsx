import React from 'react';

import '../assets/styles/components/CountriesList.scss';

import { useFetchCountries } from '../hooks/useFetchCountries';

import CountryCard from './CountryCard';
import Loading from './Loading';

const CountriesList = () => {
  const { data, loading } = useFetchCountries();

  return (
    <section className='countries-list animate__animated animate__fadeIn'>
      {loading && <Loading />}

      {data.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </section>
  );
};

export default CountriesList;
