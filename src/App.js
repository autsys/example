import React, { Component, Fragment } from 'react';
import './App.css';
//import { YesButt, NoButt, SkipButt, ButtonG } from './components/button';
import Logo from './components/logo';
import Jumbo from './components/jumbo';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <Jumbo />
        <List />
      </Fragment>
    );
  }
}

export default App;
