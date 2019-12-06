import React from 'react';

export default function Logo() {
  return(
    <img
      style={{width: 110, height: 100, marginLeft: '2%', marginTop: '1%', alignSelf: 'center'}}
      //style={{width: 110, height: 100, textAlign: 'center'}}
      src={require('../image/AS_Logo.png')}
      alt="autsys logo"
    />
  )
};