import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    greetings: state.updateStoreWithUserInput  
  }
}

export class GreetUser extends Component {
  render() {
    return (
      <h2>
        {this.props.greetings}
        <Link to="/">Go the Home page</Link>
      </h2>
    );
  }
}

export default connect(mapStateToProps)(GreetUser);
