import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    //mockData[0] because we're only interested in rendering a specific event?
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render details button', () => {
    expect(EventWrapper.find('.detailsButton').text()).toEqual('Show More');
  });

  test('render event collapsed info', () => {
    expect(EventWrapper.find('.basicInfo')).toHaveLength(1);
    expect(EventWrapper.find('.dateTime').text()).toEqual('2020-05-19T16:00:00+02:00 Europe/Berlin');
    expect(EventWrapper.find('.summary').text()).toEqual('Learn JavaScript');
    expect(EventWrapper.find('.location').text()).toEqual('London, UK');

  });

  test('change state of details button onClick', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find('.detailsButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toEqual(true);

    expect(EventWrapper.find('.eventDescription').text()).toEqual('Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.');

    EventWrapper.find('.detailsButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toEqual(false);
  });

  test('render show less text on Button when expanded', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find('.detailsButton').text()).toEqual('Show Less');
  });

});