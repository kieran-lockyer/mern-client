import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<Dashboard />', () => {
  describe('render()', () => {
    test('renders the Dashboard component', () => {
      const component = shallow(<Dashboard />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});