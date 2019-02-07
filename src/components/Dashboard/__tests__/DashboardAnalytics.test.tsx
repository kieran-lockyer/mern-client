import React from 'react';
import { shallow } from 'enzyme';
import DashboardAnalytics from '../DashboardAnalytics';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<DashboardAnalytics />', () => {
  describe('render()', () => {
    test('renders the DashboardAnalytics component', () => {
      const component = shallow(<DashboardAnalytics />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});