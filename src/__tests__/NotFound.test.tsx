import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../components/NotFound';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<NotFound />', () => {
  describe('render()', () => {
    test('renders the not found component', () => {
      const wrapper = shallow(<NotFound />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});