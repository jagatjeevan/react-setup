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
import { changeLanguage, changeImage } from '../actions/app';

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

function dispatchActionToProps(dispatch) {
  return {
    changeLanguage: bindActionCreators(changeLanguage, dispatch),
    changeImg: bindActionCreators(changeImage, dispatch),
  };
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: 'Hello User',
    };
    this.changeImages = this.changeImages.bind(this);
    this.languageChange = this.languageChange.bind(this);
  }

  changeImages() {
    const changedImage = this.props.imgSrc === '/img/image1.jpg' ? '/img/image2.jpg' : '/img/image1.jpg';
    this.props.changeImg(changedImage);
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
          <button onClick={this.changeImages}>Change Image</button>
          <img src={this.props.imgSrc} alt="button" id="img" />
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
  changeImg: PropTypes.func,
  imgSrc: PropTypes.string,
};

export default withRouter(connect(mapStateToProps, dispatchActionToProps)(App));
