import React from 'react';
import questions from '../questions.json'
import ListGroup from 'react-bootstrap/ListGroup'

const li = name => (<ListGroup.Item>{name}</ListGroup.Item>)
console.log(Object.values(questions))
const lis = Object.values(questions).map( o => li(o.Question))

export default function List(){
  return (
    <ListGroup>
    {lis}
    </ListGroup>
  )
}

