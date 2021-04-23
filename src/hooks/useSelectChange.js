import { useContext, useEffect } from 'react';
import CountriesContext from '../contexts/CountriesContext';

export const useSelectChange = () => {
  const {
    allCountries,
    setFilteredCountries,
    selectValue,
    setSelectValue,
  } = useContext(CountriesContext);

  const handleSelectChange = ({ target }) => {
    setSelectValue(target.value);
  };

  useEffect(() => {
    if (selectValue && selectValue === 'Filter by Region') {
      setFilteredCountries(allCountries);
    } else if (selectValue) {
      const countriesByRegion = allCountries.filter((country) => {
        return country.region !== '' && country.region === selectValue;
      });

      setFilteredCountries(countriesByRegion);
    }
  }, [selectValue, allCountries, setFilteredCountries]);

  return {
    handleSelectChange,
  };
};
