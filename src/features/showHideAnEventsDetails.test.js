import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';
import { extractLocations } from '../api';

import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user hasn\'t interacted with the event element', () => {

    });
    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the event\'s basic information only', () => {
      const EventWrapper = AppWrapper.find(Event);
      expect(EventWrapper.find('.eventDescription')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let AppWrapper;
    let EventWrapper;
    given('the main page of the app is rendered', () => {
      AppWrapper = mount(<App />);
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    when('the user clicks on the button to expand an event', () => {
      // const EventWrapper = AppWrapper.find(Event);
      EventWrapper.find('.detailsButton').simulate('click');
    });

    then('the user should see the description of the event', () => {

      expect(EventWrapper.find('.eventDescription')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    let EventWrapper;
    given('the user has expanded the event to see its details', () => {

      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.find('.detailsButton').simulate('click');
      expect(EventWrapper.find('.eventDescription')).toHaveLength(1);
    });

    when('when the user clicks on the button to collapse an event to hide its details', () => {
      EventWrapper.setState({
        showDetails: false,
      });

    });

    then('the details will collapse and no longer be visible', () => {
      expect(EventWrapper.find('.eventDescription')).toHaveLength(0);
    });
  });
});