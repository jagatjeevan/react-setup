import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import {updateStoreWithUserInput} from '../actions/updateStoreWithUserInput';

function mapStateToProps(state){
  return {
    greetings: state.updateStoreWithUserInput  
  }
}

function dispatchActionToProps(dispatch){
  return {
    updateStoreWithUserInput: bindActionCreators(updateStoreWithUserInput, dispatch),
  }
}

export class SayHello extends Component {
  constructor() {
    super();
    this.greetUser = this.greetUser.bind(this);
  }

  greetUser(e) {
    this.props.updateStoreWithUserInput(e.target.value);
  }

  render() {
    return(
      <div>
        <input type="text" onBlur={this.greetUser} />
        <i className='icon-handshake-o' />
        <div>{this.props.greetings}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchActionToProps)(SayHello);
