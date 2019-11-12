import React, { Component, Fragment } from 'react';
import './App.css';
//import { YesButt, NoButt, SkipButt, ButtonG } from './components/button';
import QCard from './components/card';
import Logo from './components/logo'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <QCard style={{position: 'absolute'}}/>
      </Fragment>
    );
  }
}

export default App;