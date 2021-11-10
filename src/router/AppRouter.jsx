import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../containers/home/Home';
import Country from '../containers/country/Country';

const AppRouter = () => {
  return (
    <Router>
      <HashRouter>
        <Header />

        <div>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/country/:countryId' component={Country} />
            <Redirect to='/home' />
          </Switch>
        </div>
      </HashRouter>
    </Router>
  );
};

export default AppRouter;
