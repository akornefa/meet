import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render textbox', () => {
    expect(NumberOfEventsWrapper.find('.eventsNumber')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const eventsDisplayed = NumberOfEventsWrapper.state('eventsDisplayed');
    expect(NumberOfEventsWrapper.find('.eventsNumber').prop('value')).toBe(eventsDisplayed);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      eventsDisplayed: 32
    });
    const eventObject = { target: { value: 5 } };
    NumberOfEventsWrapper.find('.eventsNumber').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventsDisplayed')).toBe(5);
  });

});