import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card'
import { ButtonG } from './button';

export default class QCard extends Component {
  render() {
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
}

function HookInputTest() {
  const [input, setInput] = useState('');
  return (
    <div>
      <p>{input}</p>
      <button onClick={() => setInput('send to where?')}>
        Click me
      </button>
    </div>
  );
}

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>
        Click me
      </button>
    </div>
  );
}