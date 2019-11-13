import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export function ButtonG() {
  const [input, setInput] = useState(false);
    return(
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button onClick={() => setInput(true)}>Yes</Button>
          <Button>No</Button>
          <Button>Skip</Button>
        </ButtonGroup>
     </div>
    )
  }