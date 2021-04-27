import React, { useContext } from 'react';

import '../assets/styles/components/CurrentSelectValue.scss';

import ThemeContext from '../contexts/ThemeContext';
import CountriesContext from '../contexts/CountriesContext';

const CurrentSelectValue = ({ selectValue }) => {
  const { themeState } = useContext(ThemeContext);

  const { setSelectValue, allCountries, setFilteredCountries } = useContext(
    CountriesContext
  );

  const handleSelectValue = () => {
    setSelectValue('');
    setFilteredCountries(allCountries);
  };

  return (
    <div
      onClick={handleSelectValue}
      className={`select-value animate__animated animate__fadeIn ${
        themeState ? 'dark' : ''
      }`}
    >
      <strong title='Remove Filter'> Countries of {selectValue}</strong>
    </div>
  );
};

export default CurrentSelectValue;
