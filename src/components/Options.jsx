import React from 'react';

import '../assets/styles/components/Options.scss';

import Form from './Form';
import Select from './Select';

const Options = ({ searchValue, searchInputRef, handleIputSearch }) => {
  return (
    <section className='options'>
      <Form
        searchValue={searchValue}
        searchInputRef={searchInputRef}
        handleIputSearch={handleIputSearch}
      />
      <Select />
    </section>
  );
};

export default Options;
