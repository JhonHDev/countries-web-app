import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';

const BorderCountry = ({ name }) => {
  const history = useHistory();

  const handleCountry = () => {
    history.push(`/country/${name}`);
  };

  return <span onClick={handleCountry}>{name}</span>;
};

BorderCountry.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BorderCountry;
