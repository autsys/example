import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Qcard from '../components/card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

// Or instead of email input give them a code (1234) so we know which project they are responding to 
// (would only work if dealing in upwork)


export default function Jumbo() {
  const [showHide, setshowHide] = useState(true);
  if (showHide === false) {
    return (
      <Qcard />
    )
  }
    return(
      <div style={{display: showHide ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333'}}>
          <h1>Welcome!</h1>
            <p>
              This is a simple questionare to help us, help you! It should take no longer than 2 minutes.
            </p>
            <p> 
              Please provide a good contact E-mail.
            </p>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          <p>
            <Button 
              onClick={() => setshowHide(false)}
              style={{width: 120}} 
              type="submit"
              variant="primary">Start</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }