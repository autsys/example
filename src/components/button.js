import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export function ButtonG() {
    return(
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button>Yes</Button>
          <Button>No</Button>
          <Button>Skip</Button>
        </ButtonGroup>
     </div>
    )
  }