import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Qcard from '../components/card';

// Or instead of email input give them a code (1234) so we know which project they are responding to 
// (would only work if dealing in upwork)


export default function Jumbo() {

  const [showHide, setshowHide] = useState(true);
  const [emailInput, setEmailInput] = useState('');

  const submitValue = () => {
    const details = {
      'Email' : emailInput
    }
    console.log(details)
  }

  if (showHide === false) {
    return (
      <Qcard />
    )
  }
    return(
      <div class="jumbo" style={{display: showHide ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', marginTop: '10%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333', boxShadow: '5px 5px 10px black'}}>
          <h1>Welcome!</h1>
            <p>
              This is a simple questionare to help us, help you! It should take no longer than 2 minutes.
            </p>
          <p style={{paddingTop: 30}}>
            <Button 
              onClick={() => setshowHide(false) && {submitValue}}
              style={{width: 140}}
              type="submit"
              variant="primary">Start</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }