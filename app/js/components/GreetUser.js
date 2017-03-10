import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';
// Translation
import translator from '../util/i18n';

import ChooseLanguage from './changeLanguage';

function mapStateToProps(state){
  return {
    greetings: state.updateStoreWithUserInput  
  }
}

export class GreetUser extends Component {
  render() {
    return (
      <div>
      <h2>
        {this.props.greetings}
        <Link to="/">{translator.translate('app.home_page_link')}</Link>
      </h2>
      <ChooseLanguage />
      </div>
    );
  }
}

export default connect(mapStateToProps)(GreetUser);
