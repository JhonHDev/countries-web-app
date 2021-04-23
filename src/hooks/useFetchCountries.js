import { useEffect, useState } from 'react';

import { getAllCountries } from '../services/getAllCountries';

export const useFetchCountries = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const { data, loading } = state;

  useEffect(() => {
    getAllCountries().then((countries) => {
      setState({
        data: countries,
        loading: false,
      });
    });
  }, []);

  return [data, loading, setState];
};
