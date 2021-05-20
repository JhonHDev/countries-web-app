import React from 'react';

import './FormSearch.scss';

import { useFormSearch } from '../../hooks/useFormSearch';

const FormSearch = () => {
  const [searchValue, handleInputSearch, handleSubmit] = useFormSearch();

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleInputSearch}
        value={searchValue}
        type='search'
        placeholder='Search for a country...'
        autoComplete='off'
      />
      <i className='fas fa-search search-icon'></i>
    </form>
  );
};

export default FormSearch;
