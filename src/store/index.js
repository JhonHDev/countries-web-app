import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import themeReducer from '../reducers/themeReducer';
import countriesReducer from '../reducers/countriesReducer';

const reducers = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
