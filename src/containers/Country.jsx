import React, { useContext } from 'react';

import '../assets/styles/containers/Country.scss';

import ThemeContext from '../contexts/ThemeContext';

import { useParams } from 'react-router';

import { useFetchCountry } from '../hooks/useFetchCountry';

import Loading from '../components/Loading';
import SingleCountryCard from '../components/SingleCountryCard';

const Country = ({ history }) => {
  const { themeState } = useContext(ThemeContext);

  const { countryId } = useParams();
  const { data: country, loading } = useFetchCountry(countryId);

  const handleCountry = () => {
    history.length <= 2 ? history.push('/home') : history.goBack();
  };

  return (
    <div
      className={`country animate__animated animate__fadeIn ${
        themeState ? 'dark' : ''
      }`}
    >
      <div className='wrapper'>
        <button onClick={handleCountry} className='btn-back'>
          <i className='fas fa-long-arrow-alt-left'></i>
          <span>Back</span>
        </button>

        <div className='country__container'>
          {loading ? <Loading /> : <SingleCountryCard {...country} />}
        </div>
      </div>
    </div>
  );
};

export default Country;
