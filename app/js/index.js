import React from 'react';
import ReactDom from 'react-dom';
import '../scss/style.scss';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greet: 'Hello World!!'
    };
  }
  render() {
    return(
      <div>
        {this.state.greet}
        <i className='icon-handshake-o' />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));
