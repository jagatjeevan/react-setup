import React, { PropTypes } from 'react';

export const App = props => (
  <div className="full-height">
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
