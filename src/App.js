import React, { Component, Fragment } from 'react';
import './App.css';
import Logo from './components/logo';
import Jumbo from './components/jumbo';
import List from './components/list';
import Qcard from './components/card';
import ExampleHook from './components/exampleHook'

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
