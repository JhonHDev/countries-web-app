import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Country from '../pages/country/Country';

const AppRouter = () => {
  return (
    <Router>
      <HashRouter>
        <Header />

        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/country/:countryName' component={Country} />
          <Redirect to='/home' />
        </Switch>
      </HashRouter>
    </Router>
  );
};

export default AppRouter;
