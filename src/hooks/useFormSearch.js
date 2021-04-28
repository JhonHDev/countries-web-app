import { useContext } from 'react';
import CountriesContext from '../contexts/CountriesContext';

export const useFormSearch = () => {
  const {
    searchValue,
    setSearchValue,
    allCountries,
    setFilteredCountries,
  } = useContext(CountriesContext);

  const handleInputSearch = ({ target }) => {
    setSearchValue(target.value);

    const query = target.value.toLowerCase().trim();
    !query && setFilteredCountries(allCountries);

    const countriesByName = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(query);
    });

    setFilteredCountries(countriesByName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return [searchValue, handleInputSearch, handleSubmit];
};
