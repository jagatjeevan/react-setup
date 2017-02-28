import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    greetings: state.updateStoreWithUserInput  
  }
}

export class GreetUser extends Component {
  render() {
    return (
      <h2>{this.props.greetings}</h2>  
    );
  }
}

export default connect(mapStateToProps)(GreetUser);
