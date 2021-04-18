import React from 'react';
import PropTypes from 'prop-types';

import BorderCountry from './BorderCountry';

const InfoThree = ({ borders }) => {
  return (
    <div className='info-three'>
      <strong>Border Countries: </strong>

      <div className='border-grid'>
        {borders.map((borde) => (
          <BorderCountry key={borde} code={borde} />
        ))}
      </div>
    </div>
  );
};

InfoThree.propTypes = {
  borders: PropTypes.array.isRequired,
};

export default InfoThree;
