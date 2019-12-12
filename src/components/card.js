import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { Button, ButtonGroup } from 'react-bootstrap';
import questions from '../questions.json';
import Thanks from '../components/thanks';
import axios from 'axios';

const answers = []

async function aPost() {
  try {
    axios.post('http://localhost:5001/autarky-systems/us-central1/submit', {
      answers
    })
  }
  catch(err){
    console.error(err)
  }
}

const Qcard = () => {

    const [steps, setSteps] = useState(0);
    const [hideQuestions, setHideQuestions] = useState(true);

    const Q = Object.values(questions)[steps].Question

      function increment(ans) {
        answers.push({Q, ans})
        setSteps(steps => steps + 1)
        if (steps === 10){
          setHideQuestions(false)
          aPost()
        }
      }

      if (hideQuestions === false) {
        return (
          <Thanks />
        )
      }
      // breaks after you reach the end need to set a limit

    return (
      <Card style={{'text-align': 'center', display: hideQuestions ? 'flex' : 'none', marginLeft: '10%', marginRight: '10%', marginTop: '10%'}}>
        <Card.Header>Question {steps + 1}</Card.Header>
          <Card.Body>
            <Card.Title>{Object.values(questions)[steps].Question}</Card.Title>
              <div className="container">
                <div className="row justify-content-between" role="group" aria-label="Choose skip no or yes">
                    <Button variant="light" value='skip' className="col button" onClick={(e) => {increment('skip');}}>Skip</Button>
                    <Button variant="secondary" value='no' className="col button" onClick={(e) => {increment('no');}}>No</Button>
                    <Button variant="primary" value='yes' className="col button" onClick={(e) => {increment('yes');}}>Yes</Button>
                </div>
              </div>
          </Card.Body>
      </Card>
    );
  }
export default Qcard
