import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesByRegion } from '../../actions/countriesActions';

import './SelectRegion.scss';

const SelectRegion = () => {
  const dispatch = useDispatch();
  const selectRef = useRef();

  const { selectValue } = useSelector((state) => state.countries);

  const handleSelectChange = (e) => {
    let region = e.target.value;
    dispatch(getCountriesByRegion(region));
  };

  useEffect(() => {
    const selectElement = selectRef.current;
    const defaultSelectValue = 0;

    if (selectValue === '') {
      selectElement.selectedIndex = defaultSelectValue;
    }
  }, [selectValue, dispatch]);

  return (
    <select
      ref={selectRef}
      onChange={handleSelectChange}
      name='Filter By Region'
      className='select'
    >
      <option value='Filter By Region'>Filter By Region</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};

export default SelectRegion;
