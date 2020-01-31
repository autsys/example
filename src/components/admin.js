import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Admin() {

  const [input, setInput] = useState('');

  const submitValue = () => {
    // const details = {
    //   'Input' : input
    // }
    const value = document.getElementById('input').value
    console.log(value)
    const id = value.split('~')[1]
    console.log('id', id)
    //read the job id from the pasted in link
    //https://www.upwork.com/jobs/~019e1d7df4efe2faf6
    const ele = document.getElementById('gen')
    ele.innerHTML = `
      <p>${id}</p>
      <p>questions go here</p>
    `
    //connect this to firebase
    //send the link to a firebase function
    //have the function generate a landing page with react
  }

  return(
    <div style={{}}>
      <form>
        <input id="input" type="text"/>
      </form>
      <Button type="submit" onClick={() => submitValue()}>Submit</Button>
      <div id="gen"></div>
   </div>
  )
}