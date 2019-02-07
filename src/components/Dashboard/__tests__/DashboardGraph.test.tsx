import React from 'react';
import { shallow } from 'enzyme';
import DashboardGraph from '../DashboardGraph';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<DashboardGraph />', () => {
  describe('render()', () => {
    test('renders the DashboardGraph component', () => {
      const component = shallow(<DashboardGraph />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});