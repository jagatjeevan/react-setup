// Framework imports
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import { IntlProvider, addLocaleData } from 'react-intl';

// Reducers
import reducers from './reducers/rootReducer';

// Routes
import routes from './routes';

// Scss
import '../scss/style.scss';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);
const locale = 'en';

let frLocaleData = require('react-intl/locale-data/fr');
addLocaleData(frLocaleData);

/* Define your translations */
let i18nConfig = {
  locale: 'fr',
  messages: {
    "app.welcome": "Bienvenue !",
    "app.greeting_message": "Salut {name}, ça va ?"
  }
};

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}

ReactDom.render(
  <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
    <App />
  </IntlProvider>, 
  document.getElementById('content')
);
