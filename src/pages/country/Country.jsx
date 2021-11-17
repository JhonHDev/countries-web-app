import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import './Country.scss';

import {
  getCountryByName,
  removeSingleCountry,
} from '../../actions/countriesActions';

import Loading from '../../components/loading/Loading';
import SingleCountryCard from '../../components/singleCountryCard/SingleCountryCard';

const Country = ({ history }) => {
  const { darkMode } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const { countryName } = useParams();

  const { country } = useSelector((state) => state.countries);
  const { data: singleCountry, loading } = country;

  useEffect(() => {
    dispatch(getCountryByName(countryName));
  }, [countryName, dispatch]);

  const handleCountry = () => {
    if (history.length <= 2) {
      history.push('/home');
    } else {
      history.goBack();
    }

    dispatch(removeSingleCountry());
  };

  return (
    <section className={`country ${darkMode ? 'dark' : ''}`}>
      <div className='wrapper'>
        <button onClick={handleCountry} className='btn-back'>
          <span className='fas fa-long-arrow-alt-left'></span>
          <span>Back</span>
        </button>

        <div className='country__container'>
          {loading ? (
            <Loading />
          ) : (
            <SingleCountryCard key={singleCountry.name} {...singleCountry} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Country;
