import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { Button, ButtonGroup } from 'react-bootstrap';
import questions from '../questions.json'

const Qcard = () => {

    const [questionIndex, setQuestions] = useState();

    return (
      <Card style={{marginLeft: '20%', marginRight: '20%', marginTop: '10%'}}>
        <Card.Header>Question #1</Card.Header>
          <Card.Body>
            <Card.Title>{Object.values(questions)[0].Question}</Card.Title>
              <div className="d-flex flex-column">
                <ButtonGroup size="lg">
                  <Button onClick={() => setQuestions()}>Yes</Button>
                  <Button onClick={() => setQuestions()}>No</Button>
                  <Button onClick={() => setQuestions()}>Skip</Button>
                </ButtonGroup>
              </div>
          </Card.Body>
      </Card>
    );
  }

export default Qcard
