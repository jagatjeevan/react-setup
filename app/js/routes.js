// Frameworks
import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';

// Configs
import AppConfig from './appConfig';

// Components for the Router
import App from './pages/App';
import SayHello from './components/SayHello';
import GreetUser from './components/GreetUser';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SayHello} />
      <Route path={AppConfig.greetUser} component={GreetUser} />
    </Route>
  </Router>
);
