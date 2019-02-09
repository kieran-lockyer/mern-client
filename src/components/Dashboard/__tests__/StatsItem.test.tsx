import React from 'react';
import { shallow } from 'enzyme';
import StatsItem from '../StatsItem';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<StatsItem />', () => {
  describe('render()', () => {
    test('renders the StatsItem component', () => {
      const wrapper = shallow(<StatsItem />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});