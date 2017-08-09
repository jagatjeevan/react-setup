import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Translation
import translator from '../util/i18n';

import ChooseLanguage from './changeLanguage';

function mapStateToProps(state) {
  return {
    greetings: state.updateStoreWithUserInput,
  };
}

export const GreetUser = props => (
  <div>
    <h2>
      {props.greetings}
      <Link to="/">{translator.translate('app.home_page_link')}</Link>
    </h2>
    <ChooseLanguage />
  </div>
);

GreetUser.propTypes = {
  greetings: PropTypes.string,
};

export default connect(mapStateToProps)(GreetUser);
