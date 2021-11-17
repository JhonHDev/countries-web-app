import React from 'react';
import { useSelector } from 'react-redux';

import './CountriesList.scss';

import FilterOptions from '../filterOptions/FilterOptions';
import Loading from '../loading/Loading';
import CountryCard from '../countryCard/CountryCard';
import CurrentSelectValue from '../currentSelectValue/CurrentSelectValue';

const CountriesList = () => {
  const { countries, loading, selectValue } = useSelector(
    (state) => state.countries
  );

  return (
    <>
      <FilterOptions />

      {selectValue === '' ||
        (selectValue !== 'Filter By Region' && (
          <CurrentSelectValue selectValue={selectValue} />
        ))}

      <section className='countries-list animate__animated animate__fadeIn'>
        {loading ? (
          <Loading />
        ) : (
          countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))
        )}
      </section>
    </>
  );
};

export default CountriesList;
