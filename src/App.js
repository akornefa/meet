import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import './nprogress.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {

  state = {
    events: [],
    locations: [],
    eventsDisplayed: 32,
    currentCity: 'all',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.eventsDisplayed),
            locations: extractLocations(events)
          });
        }
      });
    }
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    return (
      <Container className='App '>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">MEET</Navbar.Brand>
          </Container>
        </Navbar>
        <Row className="justify-content-md-center">
          <Col md={6}>
            {!navigator.onLine ? (<OfflineAlert text='You are offline!' />) : (<OfflineAlert text=' ' />)}
            <h4>Choose your nearest city</h4>
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md={6}>
            <NumberOfEvents eventsDisplayed={this.state.eventsDisplayed} updateEvents={this.updateEvents} currentCity={this.state.currentCity} />
          </Col>
          <br />
        </Row>
        <div className='data-vis-wrapper'>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <h4>Events in each city</h4>

              <ResponsiveContainer height={400} >
                <ScatterChart

                  margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                  }}
                >
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis type="number" dataKey="number" name="number of events" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>

              <EventGenre events={this.state.events} />
            </Col>
          </Row>
        </div>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <EventList events={this.state.events} />
          </Col>
        </Row>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </Container>
    );
  }
}

export default App;

