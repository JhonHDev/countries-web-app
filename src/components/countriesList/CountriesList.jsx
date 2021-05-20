import React, { useContext } from 'react';

import './CountriesList.scss';

import CountriesContext from '../../contexts/CountriesContext';

import CountryCard from '../countryCard/CountryCard';
import Loading from '../loading/Loading';
import FilterOptions from '../filterOptions/FilterOptions';
import CurrentSelectValue from '../currentSelectValue/CurrentSelectValue';

const CountriesList = () => {
  const { filteredCountries, loading, selectValue } =
    useContext(CountriesContext);

  return (
    <>
      <FilterOptions />

      {selectValue && selectValue !== 'Filter by Region' && (
        <CurrentSelectValue selectValue={selectValue} />
      )}

      <section className='countries-list animate__animated animate__fadeIn'>
        {loading && <Loading />}

        {filteredCountries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </section>
    </>
  );
};

export default CountriesList;
