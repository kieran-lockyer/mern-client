import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../routes/AppRouter';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<AppRouter />', () => {
  describe('render()', () => {
    test('renders the AppRouter component', () => {
      const wrapper = shallow(<AppRouter />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});