import React from 'react';
import PropTypes from 'prop-types';

const InfoOne = ({ nativeName, population, region, subregion, capital }) => {
  return (
    <div className='info-one'>
      <p>
        <strong>Native Name: </strong>
        <span>{nativeName}</span>
      </p>

      <p>
        <strong>Population: </strong>
        <span>{population}</span>
      </p>

      <p>
        <strong>Region: </strong>
        <span>{region}</span>
      </p>

      <p>
        <strong>Sub Region: </strong>
        <span>{subregion}</span>
      </p>

      <p>
        <strong>Capital: </strong>
        <span>{capital}</span>
      </p>
    </div>
  );
};

InfoOne.propTypes = {
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default InfoOne;
