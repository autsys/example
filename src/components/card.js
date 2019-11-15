import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card'
import { ButtonG } from './button';
import useCustom from '../hooks/globalHook';


const Qcard = () => {
  
  const [globalState, setGlobalState] = useCustom();

  const add1Global = () => {
    const newCounterValue = globalState.counter + 1;
    setGlobalState({ counter: newCounterValue });
  };

    return (
      <Card style={{marginLeft: '20%', marginRight: '20%', marginTop: '20%'}}>
        <Card.Header>Question #1</Card.Header>
          <Card.Body>
            <Card.Title>Is this project ready to begin now?</Card.Title>
              <Card.Text>
              </Card.Text>
            <ButtonG />
          </Card.Body>
      </Card>
    );
  }

export default Qcard
