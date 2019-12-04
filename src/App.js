import React, { Component, Fragment } from 'react';
import './App.css';
import Logo from './components/logo';
import Jumbo from './components/jumbo'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <Jumbo />
      </Fragment>
    );
  }
}

export default App;
