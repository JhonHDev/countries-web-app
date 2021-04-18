import { useEffect, useState } from 'react';
import { getCountryByCode } from '../services/getCountryByCode';

export const useFetchCountryName = (code) => {
  const [name, setName] = useState(code);

  useEffect(() => {
    getCountryByCode(code).then(setName);
  }, [code]);

  return {
    name,
  };
};
