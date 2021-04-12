import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from '../components/Header';

import Home from '../containers/Home';
import Country from '../containers/Country';

const AppRouter = () => {
  return (
    <Router>
      <Header />

      <div>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/country/:countryId' component={Country} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
