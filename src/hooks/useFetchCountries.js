import { useEffect, useState } from 'react';

import { getAllCountries } from '../services/getAllCountries';

export const useFetchCountries = () => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllCountries().then((countries) => {
      setstate({
        data: countries,
        loading: false,
      });
    });
  }, []);

  return state;
};
