import React from 'react';

import '../assets/styles/components/Select.scss';

const Select = () => {
  return (
    <select name='Filter by Region' className='select'>
      <option>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='America'>America</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};

export default Select;
