import React from 'react';

import useForm from '../../hooks/useForm';

import './FormSearch.scss';

const initialState = {
  searchValue: '',
};

const FormSearch = () => {
  const { formValues, handleInputChange, handleSubmit } = useForm(initialState);
  const { searchValue } = formValues;

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleInputChange}
        value={searchValue}
        name='searchValue'
        type='search'
        placeholder='Search for a country...'
        autoComplete='off'
      />
      <i className='fas fa-search search-icon'></i>
    </form>
  );
};

export default FormSearch;
