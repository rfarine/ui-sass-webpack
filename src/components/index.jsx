import { default as React, Component } from 'react';
import { default as render } from 'react-dom';

class App extends Component {
  render() {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
