import React from 'react';

import '../assets/styles/components/NoCountries.scss';

const NoCountries = ({ searchValue }) => {
  return (
    <div className='no-countries animate__animated animate__fadeIn'>
      <p className='no-countries__text'>
        There are no countries with the term: <strong>{searchValue}</strong>
      </p>
    </div>
  );
};

export default NoCountries;
