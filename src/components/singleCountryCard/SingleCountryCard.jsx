import React from 'react';
import PropTypes from 'prop-types';

import './SingleCountryCard.scss';

import InfoCountryOne from '../infoCountryOne/InfoCountryOne';
import InfoCountryTwo from '../infoCountryTwo/InfoCountryTwo';
import InfoCountryThree from '../infoCountryThree/InfoCountryThree';
import NoBorderCountries from '../noBorderCountries/NoBorderCountries';

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
      <div className='figure animate__animated animate__fadeIn'>
        <img src={flag} alt={name} className='figure__image ' />
      </div>

      <div className='details animate__animated animate__fadeIn'>
        <h3 className='details__title'>{name}</h3>

        <div className='details__grid'>
          <InfoCountryOne
            nativeName={nativeName}
            population={population}
            region={region}
            subregion={subregion}
            capital={capital}
          />

          <InfoCountryTwo
            topLevelDomain={topLevelDomain}
            currencies={currencies}
            languages={languages}
          />

          {borders.length === 0 ? (
            <NoBorderCountries />
          ) : (
            <InfoCountryThree borders={borders} />
          )}
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
