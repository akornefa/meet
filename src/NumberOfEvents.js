import React, { Component } from "react";
import { ErrorAlert } from './Alert';
import InputGroup from 'react-bootstrap/InputGroup'


class NumberOfEvents extends Component {

  state = {
    eventsDisplayed: 32,
    errorText: ''
  }

  handleInputChanged = (event) => {
    const value = +event.target.value;
    if (value <= 0 || value >= 51) {
      this.setState({
        errorText: 'only numbers 1 through 50 are valid',
        eventsDisplayed: ''
      });
    } else {
      this.setState({
        eventsDisplayed: value,
        errorText: ''
      });

      this.props.updateEvents(this.props.currentCity, value);
    }
  }


  render() {
    return (
      <InputGroup>
        <InputGroup.Text>Number of Events: </InputGroup.Text>
        <input
          type='text'
          value={this.state.eventsDisplayed}
          onChange={this.handleInputChanged}
          className='eventsNumber'>
        </input>
        <ErrorAlert text={this.state.errorText} />
      </InputGroup>
    );
  }
}
export default NumberOfEvents;