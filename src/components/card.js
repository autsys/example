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

    const arrayLength = questions.length - 1

      function increment(ans) {
        const Q = Object.values(questions)[steps].Question
        answers.push({Q, ans})
        console.log('answer', ans)
        setSteps(steps => steps + 1)
          if (steps === arrayLength){
            setHideQuestions(false)
            aPost()
            return
          }
      }

      if (hideQuestions === false) {
        return (
          <Thanks />
        )
      }
      // breaks after you reach the end needed to set a limit

    return (
      <div class="cardDown">
        <Card style={{display: hideQuestions ? 'flex' : 'none', marginLeft: '10%', marginRight: '10%', marginTop: '10%', boxShadow: '3px 3px 10px black', border: 'none'}}>
          <Card.Header style={{backgroundColor: '#555555', color: 'white'}}>Question {steps + 1}</Card.Header>
            <Card.Body style={{backgroundColor: '#333333', color: 'white'}}>
              <Card.Title>{Object.values(questions)[steps].Question}</Card.Title>
                <div className="d-flex flex-row" style={{alignContent: 'center', justifyContent: 'center'}}>
                  <button class="skipButton" style={{margin: 7, width: 110, color: '#3c76fd'}} value='skip' onClick={(e) => {increment('skip');}}>Skip</button>
                  <Button style={{margin: 7, width: 110}} value='no' onClick={(e) => {increment('no');}}>No</Button>
                  <Button style={{margin: 7, width: 110}} value='yes' onClick={(e) => {increment('yes');}}>Yes</Button>
                </div>
            </Card.Body>
        </Card>
      </div>
    );
  }
export default Qcard
