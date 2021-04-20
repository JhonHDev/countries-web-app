import React, { useMemo } from 'react';

import '../assets/styles/components/CountriesList.scss';

import { useFetchCountries } from '../hooks/useFetchCountries';
import { useFormSearch } from '../hooks/useFormSearch';

import CountryCard from './CountryCard';
import Loading from './Loading';
import Options from './Options';
import NoCountries from './NoCountries';

const CountriesList = () => {
  const { data: countries, loading } = useFetchCountries();
  const { searchValue, handleIputSearch, searchInputRef } = useFormSearch();

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) => {
        return country.name.toLowerCase().includes(searchValue.toLowerCase());
      }),
    [countries, searchValue]
  );

  return (
    <>
      <Options
        searchValue={searchValue}
        searchInputRef={searchInputRef}
        handleIputSearch={handleIputSearch}
      />

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
