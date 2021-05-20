import React, { useContext } from 'react';

import './Country.scss';

import { useParams } from 'react-router';

import ThemeContext from '../../contexts/ThemeContext';
import { useFetchCountry } from '../../hooks/useFetchCountry';

import Loading from '../../components/loading/Loading';
import SingleCountryCard from '../../components/singleCountryCard/SingleCountryCard';

const Country = ({ history }) => {
  const { themeState } = useContext(ThemeContext);

  const { countryId } = useParams();
  const { data: country, loading } = useFetchCountry(countryId);

  const handleCountry = () => {
    history.length <= 2 ? history.push('/home') : history.goBack();
  };

  return (
    <section className={`country  ${themeState ? 'dark' : ''}`}>
      <div className='wrapper'>
        <button onClick={handleCountry} className='btn-back'>
          <span className='fas fa-long-arrow-alt-left'></span>
          <span>Back</span>
        </button>

        <div className='country__container'>
          {loading ? <Loading /> : <SingleCountryCard {...country} />}
        </div>
      </div>
    </section>
  );
};

export default Country;
