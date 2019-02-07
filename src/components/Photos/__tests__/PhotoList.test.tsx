import React from 'react';
import { shallow } from 'enzyme';
import PhotoList from '../PhotoList';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<PhotoList />', () => {
  describe('render()', () => {
    test('renders the PhotoList component', () => {
      const component = shallow(<PhotoList />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});