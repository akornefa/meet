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
    expect(EventWrapper.find('.detailsButton')).toHaveLength(2);
  });

  test('render event collapsed info', () => {
    expect(EventWrapper.find('.basicInfo')).toHaveLength(1);
  });

  test('change state of details button onClick', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find('showDetails').simulate('click');
    expect(EventWrapper.state('.showDetails')).toEqual(true);
  });
});