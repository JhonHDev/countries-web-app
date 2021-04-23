import { useEffect, useState } from 'react';
import { useFetchCountries } from './useFetchCountries';

export const useGlobalData = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const [countries, loading] = useFetchCountries();

  useEffect(() => {
    setAllCountries(countries);
    setFilteredCountries(countries);
  }, [countries]);

  return [
    loading,
    allCountries,
    filteredCountries,
    setFilteredCountries,
    selectValue,
    setSelectValue,
    searchValue,
    setSearchValue,
  ];
};
