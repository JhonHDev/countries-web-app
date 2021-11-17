import types from '../types';

const initialState = {
  countries: [],
  countriesToFilter: [],
  loading: true,
  country: {
    data: {},
    loading: true,
  },
  countriesByCode: {
    data: [],
    loading: true,
  },
  selectValue: '',
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCountries:
      return {
        ...state,
        countries: action.payload,
        countriesToFilter: action.payload,
        loading: false,
      };

    case types.getSingleCountry:
      return {
        ...state,
        country: {
          data: action.payload,
          loading: false,
        },
      };

    case types.removeSingleCountry:
      return {
        ...state,
        country: {
          data: {},
          loading: true,
        },
      };

    case types.getCountryByCode:
      return {
        ...state,
        countriesByCode: {
          data: [action.payload, ...state.countriesByCode.data],
          loading: false,
        },
      };

    case types.removeCountryByCode:
      return {
        ...state,
        countriesByCode: {
          data: [],
          loading: true,
        },
      };

    case types.filterCountriesByRegion:
      let countriesSelectFound = [];

      let areAllRegions = action.payload !== 'Filter By Region';

      countriesSelectFound = state.countriesToFilter.filter((country) =>
        areAllRegions ? country.region === action.payload : country
      );

      return {
        ...state,
        countries: countriesSelectFound,
        selectValue: action.payload,
      };

    case types.resetCountriesByRegion:
      return {
        ...state,
        selectValue: '',
        countries: state.countriesToFilter,
      };

    case types.searchCountriesByName:
      let countriesFound = [];

      countriesFound = state.countriesToFilter.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        countries: countriesFound,
      };

    default:
      return state;
  }
};

export default countriesReducer;
