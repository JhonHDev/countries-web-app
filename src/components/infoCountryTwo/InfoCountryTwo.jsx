import React from 'react';
import PropTypes from 'prop-types';

const InfoTwo = ({ topLevelDomain, currencies, languages }) => {
  return (
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
  );
};

InfoTwo.propTypes = {
  topLevelDomain: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
};

export default InfoTwo;
