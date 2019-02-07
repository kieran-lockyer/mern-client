import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import photoReducer from '../photoReducer';


describe('photoReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: "FETCH_PHOTOS" };
      const initialState = { 
        alertIsOpen: false,
        filterData: {
          pageNum: undefined,
          limit: undefined,
          field: undefined,
          order: undefined,
          option: "",
          tagInput: [],
          filterString: undefined,
          layoutType: "list"
        },
        photoData: undefined
      };
      expect(photoReducer(undefined, action)).toEqual(initialState);
    });
  });
});