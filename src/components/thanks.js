import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Thanks() {
    return(
      <div class="jumbo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333'}}>
          <h1>Thanks!</h1>
            <p>
              You should recieve an email from us ** something something does this increase the length of component
            </p>
        </Jumbotron>
      </div>
    )
  }