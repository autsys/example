import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default class Jumbo extends Component {
  render() {
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333'}}>
          <h1>Welcome!</h1>
          <p>
            This is a simple questionare to help us, help you! It should take no longer than 2 minutes.
          </p>
          <p>
            <Button style={{width: 100}} variant="primary">Start</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}