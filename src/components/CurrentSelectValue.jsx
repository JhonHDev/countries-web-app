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
      className={`select-value animate__animated animate__fadeIn ${
        themeState ? 'dark' : ''
      }`}
    >
      <strong>
        <span className='text'>Countries of {selectValue}</span>

        <span onClick={handleSelectValue} className='close-icon'>
          <i className='fas fa-times'></i>
        </span>
      </strong>
    </div>
  );
};

export default CurrentSelectValue;
