import React, { useContext } from 'react';

import '../assets/styles/components/CountriesList.scss';

import CountriesContext from '../contexts/CountriesContext';

import CountryCard from './CountryCard';
import Loading from './Loading';
import Options from './Options';
import NoCountries from './NoCountries';
import CurrentSelectValue from './CurrentSelectValue';

const CountriesList = () => {
  const { filteredCountries, loading, selectValue, searchValue } = useContext(
    CountriesContext
  );

  return (
    <>
      <Options />

      {selectValue && selectValue !== 'Filter by Region' && (
        <CurrentSelectValue selectValue={selectValue} />
      )}

      <section className='countries-list animate__animated animate__fadeIn'>
        {loading && <Loading />}

        {!loading && filteredCountries.length === 0 && (
          <NoCountries searchValue={searchValue} />
        )}

        {filteredCountries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </section>
    </>
  );
};

export default CountriesList;
