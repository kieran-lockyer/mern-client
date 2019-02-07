import React from 'react';
import { shallow } from 'enzyme';
import AnalyticsCard from '../AnalyticsCard';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<AnalyticsCard />', () => {
  describe('render()', () => {
    test('renders the AnalyticsCard component', () => {
      const component = shallow(<AnalyticsCard />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});