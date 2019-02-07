import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../components/Sidebar';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<Sidebar />', () => {
  describe('render()', () => {
    test('renders the sidebar component', () => {
      const wrapper = shallow(<Sidebar />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});