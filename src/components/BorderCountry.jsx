import React from 'react';

import { useHistory } from 'react-router';

import { useFetchCountryName } from '../hooks/useFetchCountryName';

const BorderCountry = ({ code }) => {
  const history = useHistory();
  const { name } = useFetchCountryName(code);

  const handleCountry = () => {
    history.push(`/country/${name}`);
  };

  return <span onClick={handleCountry}>{name}</span>;
};

export default BorderCountry;
