import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import BorderCountry from '../borderCountry/BorderCountry';
import { getCountryByCode } from '../../actions/countriesActions';

const InfoThree = ({ borders = [] }) => {
  const dispatch = useDispatch();

  const { countriesByCode } = useSelector((state) => state.countries);
  const { data: nameList, loading } = countriesByCode;

  useEffect(() => {
    borders.forEach((code) => dispatch(getCountryByCode(code)));
  }, [borders, dispatch]);

  return (
    <div className='info-three'>
      <strong>Border Countries: </strong>

      <div className='border-grid'>
        {loading ? (
          <span>Cargando...</span>
        ) : (
          nameList.map((name) => {
            return <BorderCountry key={name} name={name} />;
          })
        )}
      </div>
    </div>
  );
};

InfoThree.propTypes = {
  borders: PropTypes.array.isRequired,
};

export default InfoThree;
