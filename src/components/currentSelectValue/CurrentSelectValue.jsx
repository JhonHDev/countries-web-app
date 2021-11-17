import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { resetCountriesFilteredByRegion } from '../../actions/countriesActions';

import './CurrentSelectValue.scss';

const CurrentSelectValue = ({ selectValue }) => {
  const dispatch = useDispatch();

  const resetSelectValue = () => {
    dispatch(resetCountriesFilteredByRegion());
  };

  return (
    <div className={`select-value animate__animated animate__fadeIn`}>
      <strong>
        <span className='text'>Countries of {selectValue}</span>

        <span onClick={resetSelectValue} className='close-icon'>
          <i className='fas fa-times'></i>
        </span>
      </strong>
    </div>
  );
};

CurrentSelectValue.propTypes = {
  selectValue: PropTypes.string.isRequired,
};

export default CurrentSelectValue;
