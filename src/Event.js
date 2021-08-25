import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      <Card>
        <Card.Body>
          <div className='basicInfo'>
            <Card.Header className='dateTime'>{event.start.dateTime} {event.start.timeZone}</Card.Header>
            <Card.Title className='summary'>{event.summary}</Card.Title>
            <Card.Text className='location'>{event.location}</Card.Text>

          </div>
          {this.state.showDetails === false &&
            <Button
              variant="outline-dark"
              type='submit'
              className='detailsButton'
              onClick={() => this.handleButton()}>
              Show More
            </Button>}
          {this.state.showDetails === true && <div>
            <p className='eventDescription'>{event.description}</p>
            <Button
              variant="outline-dark"
              type='submit'
              className='detailsButton'
              onClick={() => this.handleButton()}>
              Show Less
            </Button>
          </div>
          }
        </Card.Body>
      </Card>
    );
  }
}
export default Event;