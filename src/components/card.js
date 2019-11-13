import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { ButtonG } from './button';

export default class QCard extends Component {
  render() {
    return (
      <Card style={{marginLeft: '10%', marginRight: '10%', marginTop: '20%'}}>
        <Card.Header>Question #1</Card.Header>
          <Card.Body>
            <Card.Title>Is this project ready to begin now?</Card.Title>
              <Card.Text>
                Something here maybe
              </Card.Text>
            <ButtonG />
          </Card.Body>
      </Card>
    );
  }
}