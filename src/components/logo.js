import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'


export default class Logo extends Component {
  render() {
    return(
          <Image 
            //style={{position: 'absolute'}}
            src="../image/AS_Logo.png" 
            fluid 
          />
    )
  }
}