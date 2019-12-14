import React, { Component, Fragment } from 'react';
import './App.css';
import Jumbo from './components/jumbo'
import Admin from './components/admin'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Admin />
      </Fragment>
    );
  }
}

export default App;
