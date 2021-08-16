import React, { Component } from "react";

class Event extends Component {

  state = {
    showDetails: false
  }

  handleButton = (event) => {
    this.setState({ showDetails: !showDetails });
  };
  render() {

    let event = this.props.event;

    return <div>
      <div className='basicInfo'>
        <p>{event.start.dateTime}</p>
        <h2>{event.summary}</h2>
        <p>{event.location}</p>
        {/* not sure how to implement number of people going or people hosting?? */}
      </div>
      {/* if (this.state.showDetails === true) return (<p>{event.description}</p>) */}
      if (this.state.showDetails === false) return
      (<button
        type='submit'
        className='detailsButton showDetails'
        onClick={() => this.handleButton()}>
        More
      </button>);
      if (this.state.showDetails === true) return
      ((<p>{event.description}</p>)
      <button
        type='submit'
        className='detailsButton showDetails'
        onClick={() => this.handleButton()}>
        Details
      </button>);
    </div>;
  }
}
export default Event;