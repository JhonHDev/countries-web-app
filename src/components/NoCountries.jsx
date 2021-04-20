import React from 'react';

import '../assets/styles/components/NoCountries.scss';

const NoCountries = ({ searchValue }) => {
  return (
    <div className='no-countries animate__animated animate__fadeIn'>
      <p className='no-countries__text'>
        No existen países con el término: <strong>{searchValue}</strong>
      </p>
    </div>
  );
};

export default NoCountries;
