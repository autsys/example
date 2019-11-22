import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { Button, ButtonGroup } from 'react-bootstrap';
import questions from '../questions.json';
import Thanks from '../components/thanks';



const Qcard = () => {

    const [steps, setSteps] = useState(0);


      function increment() {
        setSteps(steps => steps + 1);
      }

      // breaks after you reach the end need to set a limit

    return (
      <Card style={{marginLeft: '20%', marginRight: '20%', marginTop: '10%'}}>
        <Card.Header>Question {steps + 1}</Card.Header>
          <Card.Body>
            <Card.Title>{Object.values(questions)[steps].Question}</Card.Title>
              <div className="d-flex flex-column">
                <ButtonGroup size="lg">
                  <Button type='Yes' onClick={increment}>Yes</Button>
                  <Button type='No' onClick={increment}>No</Button>
                  <Button type='Skip' onClick={increment}>Skip</Button>
                </ButtonGroup>
              </div>
          </Card.Body>
      </Card>
    );
  }

export default Qcard
