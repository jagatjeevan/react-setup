import React, { Component } from 'react';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import paths from '../paths';
import Dashboard from './Dashboard';
import About from './About';

import translator from '../utils/I18N';
import { setLanguage } from '../utils/language';
import { changeLanguage } from '../actions/app';

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

function dispatchActionToProps(dispatch) {
  return {
    changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      greet: 'Hello User',
    };
    this.languageChange = this.languageChange.bind(this);
  }

  languageChange(lang) {
    setLanguage(lang);
    this.props.changeLanguage(lang);
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h4>Logo</h4>
          <ul className="menu">
            <li><Link to={paths.dashboard}>{ translator.translate('app.menu.dashboard') }</Link></li>
            <li><Link to={paths.about}>{ translator.translate('app.menu.about') }</Link></li>
            <li><button onClick={() => this.languageChange('en')}>English</button></li>
            <li><button onClick={() => this.languageChange('fr')}>French</button></li>
          </ul>
        </header>
        <section className="content-section">
          <div>{this.state.greet}</div>
          <Switch>
            <Route path={paths.dashboard} component={Dashboard} />
            <Route path={paths.about} component={About} />
          </Switch>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  changeLanguage: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, dispatchActionToProps)(App));
