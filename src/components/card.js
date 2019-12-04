import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { Button, ButtonGroup } from 'react-bootstrap';
import questions from '../questions.json';
import Thanks from '../components/thanks';
import axios from 'axios';

const answers = []

function aPost() {
  axios.post('http://localhost:5000/autarky-systems/us-central1/submit', {
    answers
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const Qcard = () => {

    const [steps, setSteps] = useState(0);
    const [hideQuestions, setHideQuestions] = useState(true);

      function increment(ans) {
        answers.push(ans)
        console.log('answer', ans)
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
                  <Button value='yes' onClick={(e) => {increment('yes');}}>Yes</Button>
                  <Button value='no' onClick={(e) => {increment('no');}}>No</Button>
                  <Button value='skip' onClick={(e) => {increment('skip');}}>Skip</Button>
                </ButtonGroup>
              </div>
          </Card.Body>
      </Card>
    );
  }
export default Qcard
