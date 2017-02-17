// Framework imports
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/rootReducer';

// Components of the Application
import SayHello from './components/SayHello';

import '../scss/style.scss';
const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <SayHello />
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));
