import React from 'react';
import PropTypes from 'prop-types';

import './CountryCard.scss';

import { useHistory } from 'react-router';

const CountryCard = ({ name, flag, population, region, capital }) => {
  const history = useHistory();

  const handleCountry = () => {
    history.push(`/country/${name}`);
  };

  return (
    <article
      onClick={handleCountry}
      className='country-card animate__animated animate__fadeIn'
    >
      <figure>
        <img src={flag} alt={name} />
      </figure>

      <div className='country-card__details'>
        <h3 className='country-card__title'>{name}</h3>

        <p className='country-card__paragraph'>
          <strong>Population: </strong>
          <span>{population}</span>
        </p>

        <p className='country-card__paragraph'>
          <strong>Region: </strong>
          <span>{region}</span>
        </p>

        <p className='country-card__paragraph'>
          <strong>Capital: </strong>
          <span>{capital}</span>
        </p>
      </div>
    </article>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default CountryCard;
