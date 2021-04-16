import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/SingleCountryCard.scss';

const SingleCountryCard = ({
  name,
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  return (
    <section className='single-country animate__animated animate__fadeIn'>
      <div className='figure animate__animated animate__backInLeft'>
        <img src={flag} alt={name} className='figure__image ' />
      </div>

      <div className='details animate__animated animate__backInRight'>
        <h3 className='details__title'>{name}</h3>

        <div className='details__grid'>
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

          <div className='info-two'>
            <p>
              <strong>Top Level Domain: </strong>
              <span>{topLevelDomain}</span>
            </p>

            <p>
              <strong>Currencies: </strong>
              <span>{currencies[0].name}</span>
            </p>

            <p>
              <strong>Languages: </strong>
              <span>{languages.map((language) => `${language.name} `)}</span>
            </p>
          </div>

          <div className='info-three'>
            <strong>Border Countries: </strong>
            <div className='border-grid'>
              {borders.map((borde) => (
                <span key={borde}> {borde} </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SingleCountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  borders: PropTypes.array.isRequired,
};

export default SingleCountryCard;
