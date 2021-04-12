import React, { useEffect, useState } from 'react';

import '../assets/styles/components/CountriesList.scss';

import { getAllCountries } from '../services/getAllCountries';

import CountryCard from './CountryCard';

const CountriesList = () => {
  const [coutries, setCoutries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then(setCoutries)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className='countries-list'>
      {coutries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </section>
  );
};

export default CountriesList;
