// Frameworks
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Configs
import AppConfig from './appConfig';

// Components for the Router
import App from './pages/App';
import SayHello from './components/SayHello';
import GreetUser from './components/GreetUser';

export default (
  <Router>
    <App>
      <Switch>
        <Route exact path={AppConfig.basePath} component={SayHello} />
        <Route path={AppConfig.greetUser} component={GreetUser} />
      </Switch>
    </App>
  </Router>
);
