import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { Button, ButtonGroup } from 'react-bootstrap';
import questions from '../questions.json';
import Thanks from '../components/thanks';


const Qcard = () => {

    const [steps, setSteps] = useState(0);
    const [hideQuestions, setHideQuestions] = useState(true);

      function increment() {
        setSteps(steps => steps + 1)
        if (steps === 10){
          setHideQuestions(false)
        }
      }

      if (hideQuestions === false) {
        return (
          <Thanks />
        )
      }

      // breaks after you reach the end need to set a limit

    return (
      <Card style={{display: hideQuestions ? 'flex' : 'none', marginLeft: '20%', marginRight: '20%', marginTop: '10%'}}>
        <Card.Header>Question {steps + 1}</Card.Header>
          <Card.Body>
            <Card.Title>{Object.values(questions)[steps].Question}</Card.Title>
              <div className="d-flex flex-column">
                <ButtonGroup size="lg">
                  <Button value='yes' onClick={(e) => {increment(); console.log(e.target.value)}}>Yes</Button>
                  <Button value='no' onClick={(e) => {increment(); console.log(e.target.value)}}>No</Button>
                  <Button value='skip' onClick={(e) => {increment(); console.log(e.target.value)}}>Skip</Button>
                </ButtonGroup>
              </div>
          </Card.Body>
      </Card>
    );
  }

export default Qcard
