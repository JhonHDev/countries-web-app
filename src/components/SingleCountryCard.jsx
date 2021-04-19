import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/SingleCountryCard.scss';

import InfoOne from './InfoOne';
import InfoTwo from './InfoTwo';
import InfoThree from './InfoThree';
import NoBorderCountries from './NoBorderCountries';

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
          <InfoOne
            nativeName={nativeName}
            population={population}
            region={region}
            subregion={subregion}
            capital={capital}
          />

          <InfoTwo
            topLevelDomain={topLevelDomain}
            currencies={currencies}
            languages={languages}
          />

          {borders.length === 0 ? (
            <NoBorderCountries />
          ) : (
            <InfoThree borders={borders} />
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
