import React from 'react';

import SingleCountryCard from '../components/SingleCountryCard';

const Country = ({ history }) => {
  const handleCountry = () => {
    history.goBack();
  };

  return (
    <div className='country'>
      <div className='wrapper'>
        <button onClick={handleCountry}>
          <i className='fas fa-long-arrow-alt-left'></i>
          <span>Back</span>
        </button>

        <SingleCountryCard />
      </div>
    </div>
  );
};

export default Country;
