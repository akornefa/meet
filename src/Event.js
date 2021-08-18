import React, { Component } from "react";

class Event extends Component {

  state = {
    showDetails: false
  }

  handleButton = () => {
    this.setState(function (prevState) {
      return {
        showDetails: !prevState.showDetails
      }
    })
  };


  render() {

    let event = this.props.event;

    return (
      <div>
        <div className='basicInfo'>
          <p className='dateTime'>{event.start.dateTime}</p>
          <h2 className='summary'>{event.summary}</h2>
          <p className='location'>{event.location}</p>

        </div>
        {this.state.showDetails === false &&
          <button
            type='submit'
            className='detailsButton'
            onClick={() => this.handleButton()}>
            Show More
          </button>}
        {this.state.showDetails === true && <div>
          <p className='eventDescription'>{event.description}</p>
          <button
            type='submit'
            className='detailsButton'
            onClick={() => this.handleButton()}>
            Show Less
          </button>
        </div>
        }

      </div>
    );
  }
}
export default Event;