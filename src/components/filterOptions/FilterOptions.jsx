import React from 'react';

import './FilterOptions.scss';

import FormSearch from '../formSearch/FormSearch';
import SelectRegion from '../selectRegion/SelectRegion';

const FilterOptions = () => (
  <section className='filter-options'>
    <FormSearch />
    <SelectRegion />
  </section>
);

export default FilterOptions;
