// Framework imports
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
// Translator
import i18N from './util/i18n';
import * as language from './util/language';
// Reducers
import reducers from './reducers/rootReducer';

// Routes
import routes from './routes';

// Scss
import '../scss/style.scss';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);
language.getLanguage();

function start() {
  ReactDom.render(<App />, document.getElementById('content'));
}

function run() {
  i18N.initiateTranslator(start);
}

export const App = () => (
  <Provider store={store}>
    {routes}
  </Provider>
);

window.addEventListener('DOMContentLoaded', run);
