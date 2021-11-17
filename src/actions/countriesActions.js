import types from '../types';

const apiBase = 'https://restcountries.com/v2';

const getCountries = (countries) => ({
  type: types.getCountries,
  payload: countries,
});

const getSingleCountry = (country) => ({
  type: types.getSingleCountry,
  payload: country,
});

const removeSingleCountry = () => ({
  type: types.removeSingleCountry,
});

const getSingleCountryByCode = (country) => ({
  type: types.getCountryByCode,
  payload: country,
});

const removeSingleCountryByCode = () => ({
  type: types.removeCountryByCode,
});

const getCountriesByRegion = (region) => ({
  type: types.filterCountriesByRegion,
  payload: region,
});

const resetCountriesFilteredByRegion = () => ({
  type: types.resetCountriesByRegion,
});

const getCountriesFoundByName = (name) => ({
  type: types.searchCountriesByName,
  payload: name,
});

const loadCountries = () => {
  return (dispatch) => {
    fetch(`${apiBase}/all`)
      .then((resp) => resp.json())
      .then((countries) => dispatch(getCountries(countries)));
  };
};

const getCountryByName = (name) => {
  return (dispatch) => {
    dispatch(resetCountriesFilteredByRegion());

    fetch(`${apiBase}/name/${name}`)
      .then((resp) => resp.json())
      .then(([country]) => dispatch(getSingleCountry(country)));
  };
};

const getCountryByCode = (code) => {
  return (dispatch) => {
    dispatch(removeSingleCountryByCode());

    fetch(`${apiBase}/alpha/${code}`)
      .then((resp) => resp.json())
      .then((country) => dispatch(getSingleCountryByCode(country.name)));
  };
};

export {
  loadCountries,
  getCountryByName,
  removeSingleCountry,
  getCountryByCode,
  removeSingleCountryByCode,
  getCountriesByRegion,
  resetCountriesFilteredByRegion,
  getCountriesFoundByName,
};
