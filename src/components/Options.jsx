import React from 'react';

import '../assets/styles/components/Options.scss';

import Form from './Form';
import Select from './Select';

const Options = () => {
  return (
    <section className='options'>
      <Form />
      <Select />
    </section>
  );
};

export default Options;
