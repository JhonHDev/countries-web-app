import React from 'react';

import '../assets/styles/components/Form.scss';

const Form = ({ searchValue, searchInputRef, handleIputSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleIputSearch}
        type='search'
        value={searchValue}
        name='search'
        ref={searchInputRef}
        placeholder='Search for a country...'
        autoComplete='off'
      />
    </form>
  );
};

export default Form;
