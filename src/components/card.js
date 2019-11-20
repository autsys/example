import React from 'react';
import Card from 'react-bootstrap/Card'
import globalHook from 'use-global-hook';
import questions from '../questions.json'
import { Button, ButtonGroup } from 'react-bootstrap';

const initialState = {
  counter: 0,
};
 
const actions = {
  addToCounter: (store, amount) => {
    const newCounterValue = store.state.counter + amount;
    store.setState({ counter: newCounterValue });
  },
};
 
const useGlobal = globalHook(React, initialState, actions);
 
const Qcard = () => {

    const [globalState, globalActions] = useGlobal();

    return (
      <Card style={{marginLeft: '20%', marginRight: '20%', marginTop: '10%'}}>
        <Card.Header>Question #1</Card.Header>
          <Card.Body>
            <Card.Title>{Object.values(questions)[0].Question}</Card.Title>
              <div className="d-flex flex-column">
                <ButtonGroup size="lg">
                  <Button type="button" onClick={() => globalActions.addToCounter(1)}>Yes</Button>
                  <Button onClick={() => globalActions.addToCounter(1)}>No</Button>
                  <Button onClick={() => globalActions.addToCounter(1)}>Skip</Button>
                </ButtonGroup>
              </div>
          </Card.Body>
      </Card>
    );
  }

export default Qcard
