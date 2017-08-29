import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import App from './components/App';
import I18N from './utils/I18N';
import { configureStore } from './reduxStore';

import '../scss/style.scss';

const store = configureStore();

function startRender() {
  ReactDom.render((
    <I18nextProvider i18n={I18N}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </I18nextProvider>
  ), document.querySelector('#app'));
}

function bootstrapFailed(err) {
  /* eslint no-console:0 */
  console.log('The translations failed', err);
}

function run() {
  I18N.initiateTranslator(startRender, bootstrapFailed);
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
