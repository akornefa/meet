import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user views the number of events', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);

    });

    then('the default number displayed will be 32', () => {
      expect(NumberOfEventsWrapper.state('eventsDisplayed')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);

    });

    when('the user clicks in the input field to change the number of events they want to see', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
      const eventObject = { target: { value: 2 } };
      NumberOfEventsWrapper.find('.eventsNumber').simulate('change', eventObject);

    });

    then('the desired number of events will be rendered', () => {
      expect(NumberOfEventsWrapper.state('eventsDisplayed')).toBe(2);

    });
  });


});