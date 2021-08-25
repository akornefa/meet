import React, { Component } from "react";

import InputGroup from 'react-bootstrap/InputGroup'


class NumberOfEvents extends Component {

  state = {
    eventsDisplayed: 32,
  }

  handleInputChanged = (event) => {
    const value = +event.target.value;
    this.setState({ eventsDisplayed: value });

    this.props.updateEvents(this.props.currentCity, value);
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
      </InputGroup>
    );
  }
}
export default NumberOfEvents;