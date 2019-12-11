import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Thanks() {
    return(
      <div class="jumbo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333', width: '500px', textAlign: 'center'}}>
          <h1>Thanks!</h1>
        </Jumbotron>
      </div>
    )
  }