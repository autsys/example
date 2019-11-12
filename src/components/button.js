import React, { Component } from 'react';
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';

export class YesButt extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button style={buttonStyle} variant="outline-success">Yes</Button>
      </ButtonToolbar>
    );
  }
}

export class SkipButt extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button style={buttonStyle} variant="outline-warning">Skip</Button>
      </ButtonToolbar>
    );
  }
}

export class NoButt extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button style={buttonStyle} variant="outline-danger">No</Button>
      </ButtonToolbar>
    );
  }
}

export class ButtonG extends Component {
  render() {
    return(
      <div className="d-flex flex-column">
        <ButtonGroup border='danger' bg='danger' size="lg">
          <Button border='danger'>Yes</Button>
          <Button>No</Button>
          <Button>Skip</Button>
        </ButtonGroup>
     </div>
    )
  }
}

const buttonStyle = {
  width: 120,
};
