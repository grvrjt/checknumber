import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import {Carousel, Button, Form} from 'react-bootstrap';

class CheckNumber extends Component {
  constructor (props) {
    super (props);

    this.state = {
      alertWin: null,
      alertLoose: null,
      selectedNumber: 0,
    };
  }

  handleSelectedNumber = event => {
    this.setState ({
      selectedNumber: event.target.value,
    });
  };

  generateRandomNumber () {
    let randomNumber = parseInt (Math.random () * 5 + 1);
    console.log ('in generate number ', randomNumber);
    return randomNumber;
  }

  handleSubmit = event => {
    const randomNumber = this.generateRandomNumber ();
    console.log ('selected number is ', this.state.selectedNumber);
    if (randomNumber == this.state.selectedNumber) {
      const getAlertWin = () => (
        <SweetAlert
          success
          title="Hey !! You Are The Winner "
          confirmBtnText="Go Ahead  "
          onConfirm={() => this.hideAlert ()}
        />
      );
      this.setState ({
        alertWin: getAlertWin (),
      });
    } else {
      const getAlertLoose = () => (
        <SweetAlert
          info
          title="Oh !! You Have Lost !!"
          closingAction
          confirmBtnText="Try Again "
          onConfirm={() => this.hideAlert ()}
        />
      );

      this.setState ({
        alertLoose: getAlertLoose (),
      });
    }
    event.preventDefault ();
  };

  hideAlert () {
    console.log ('Hiding alert...');
    this.setState ({
      alertLoose: null,
      alertWin: null,
    });
  }

  render () {
    const {selectedNumber} = this.state;
    return (
      <div>
        <h1 id="head"><strong>Choose A Number From 1 To 5</strong> </h1>
        <div className="numberForm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                as="select"
                value={selectedNumber}
                onChange={this.handleSelectedNumber}
                custom
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" variant="success" size="lg">
              Submit To Check Number Matched Or Not
            </Button>
          </Form>
        </div>
        {this.state.alertWin}
        {this.state.alertLoose}
      </div>
    );
  }
}

export default CheckNumber;
