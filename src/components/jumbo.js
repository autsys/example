import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class Jumbo extends Component {
  render() {
    return(
      <Jumbotron style={{textAlign: 'center', backgroundColor:'white', alignSelf: 'center'}}>
        <h1>Autarky Systems</h1>
          <p>
            Thanks for taking time to help us, help you!
          </p>
          <p>
            Click HERE to get started.
          </p>
      </Jumbotron>
    )
  }
}