import React, { useContext } from 'react';

import '../assets/styles/components/CurrentSelectValue.scss';
import CountriesContext from '../contexts/CountriesContext';

const CurrentSelectValue = ({ selectValue }) => {
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
      className='select-value animate__animated animate__fadeIn'
    >
      <strong title='Remove Filter'> Countries of {selectValue}</strong>
    </div>
  );
};

export default CurrentSelectValue;
