// Frameworks
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Translator
import translator from '../util/i18n';
import ChooseLanguage from './changeLanguage';
// actions
import { updateStoreWithUserInput } from '../actions/updateStoreWithUserInput';

function mapStateToProps(state) {
  return {
    greetings: state.updateStoreWithUserInput,
  };
}

function dispatchActionToProps(dispatch) {
  return {
    updateStoreWithUserInput: bindActionCreators(updateStoreWithUserInput, dispatch),
  };
}

export class SayHello extends Component {
  constructor() {
    super();
    this.greetUser = this.greetUser.bind(this);
    this.greetName = this.greetName.bind(this);
  }

  greetUser(e) {
    this.props.updateStoreWithUserInput(e.target.value);
  }

  greetName() {
    if (this.props.greetings !== '') {
      return (
        <div>{translator.translate('app.greeting_message')} : {this.props.greetings}</div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <h2>
          {translator.translate('app.welcome')}
          <Link to="/greet">{translator.translate('app.greet_page_link')}</Link>
        </h2>
        <input type="text" onBlur={this.greetUser} />
        <i className="icon-handshake-o" />
        {this.greetName()}
        <ChooseLanguage />
      </div>
    );
  }
}

SayHello.propTypes = {
  greetings: PropTypes.string,
  updateStoreWithUserInput: PropTypes.func,
};

export default connect(mapStateToProps, dispatchActionToProps)(SayHello);
