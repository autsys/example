import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import useGlobalHook from '../hooks/globalHook'

export default function Jumbo() {
  const [showComp, setShowComp] = useState(true);
    return(
      <div style={{display: showComp ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333'}}>
          <h1>Welcome!</h1>
            <p>
              This is a simple questionare to help us, help you! It should take no longer than 2 minutes.
            </p>
          <p>
            <Button 
            onClick={() => setShowComp(!showComp)}
            style={{width: 120}} 
            variant="primary">Start</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }