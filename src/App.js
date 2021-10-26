import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
import './nprogress.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component {

  state = {
    events: [],
    locations: [],
    eventsDisplayed: 32,
    currentCity: 'all'
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.eventsDisplayed),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  //location is the citySuggestion that gets passed
  // eventCount is the value that gets passed??
  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        eventsDisplayed: eventCount
      });
    });
  }

  render() {
    return (
      <Container className='App '>
        <Row className="justify-content-md-center">
          <Col md={6}>
            {!navigator.onLine ? (<OfflineAlert text='You are offline!' />) : (<OfflineAlert text=' ' />)}
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <NumberOfEvents eventsDisplayed={this.state.eventsDisplayed} updateEvents={this.updateEvents} currentCity={this.state.currentCity} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <EventList events={this.state.events} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

