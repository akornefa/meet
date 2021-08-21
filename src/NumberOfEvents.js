import React, { Component } from "react";


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
      <div>
        <p>Number of Events: </p>
        <input
          type='text'
          value={this.state.eventsDisplayed}
          onChange={this.handleInputChanged}
          className='eventsNumber'>
        </input>
      </div>
    );
  }
}
export default NumberOfEvents;