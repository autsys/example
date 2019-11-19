import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import globalHook from 'use-global-hook';
import Qcard from '../components/card'

const initialState = {
  jumbo: 'flex',
  card: 'none',
  index: 0
};

const actions = {
  toggleDisplay: (store, changeDisplay) => {
    const showHide = store.state.display;
    store.setState({ changeDisplay: showHide });
  }
};

const useGlobal = globalHook(React, initialState, actions);

export default function Jumbo() {

  const [globalState, globalActions] = useGlobal();

    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
        <Jumbotron style={{color: 'white', backgroundColor: '#333333'}}>
          <h1>Welcome!</h1>
            <p>
              This is a simple questionare to help us, help you! It should take no longer than 2 minutes.
            </p>
          <p>
            <Button 
              onClick={() => globalActions.toggleDisplay()}
              style={{width: 120}} 
              variant="primary">Start</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }