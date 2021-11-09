import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import InputGroup from 'react-bootstrap/InputGroup'

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  }
  // this simply takes the value from the input and updates the state of query based on that value.
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (

      <InputGroup className='CitySearch'>
        <InfoAlert text={this.state.infoText} />
        <InputGroup.Text>Search by city: </InputGroup.Text>
        <input
          type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className='suggestions' style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              style="cursor: pointer;"
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li
            style="cursor: pointer;"
            onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>

      </InputGroup>
    );
  }
}

export default CitySearch;