import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default function Thanks() {
    return(
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button>Thank</Button>
          <Button>You</Button>
          <Button>Come again</Button>
        </ButtonGroup>
     </div>
    )
  }