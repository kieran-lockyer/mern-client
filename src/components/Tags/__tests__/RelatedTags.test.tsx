import React from 'react';
import { shallow } from 'enzyme';
import RelatedTags from '../RelatedTags';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<RelatedTags />', () => {
  describe('render()', () => {
    test('renders the RelatedTags component', () => {
      const component = shallow(<RelatedTags />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});