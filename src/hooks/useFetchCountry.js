import { useEffect, useState } from 'react';

import { getCountryByName } from '../services/getCountryByName';

export const useFetchCountry = (countryId) => {
  const [country, setCountry] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getCountryByName(countryId).then(([country]) => {
      setCountry({
        data: country,
        loading: false,
      });
    });
  }, [countryId]);

  return country;
};
