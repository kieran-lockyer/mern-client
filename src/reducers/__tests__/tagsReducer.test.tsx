import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import tagsReducer from '../tagsReducer';


describe('tagsReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: "FETCH_TAGS" };
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
        },
        tagData: undefined
      };
      expect(tagsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe("FETCH_TAGS", () => {
    test('returns the correct state', () => {
      const action = { 
        type: "FETCH_TAGS", 
        tagData: ['uni'],
        pageNum: 1,
        limit: 30,
        field: 'dateAdded',
        order: 'asc',
        filterString: 'uni'
      };
      const expectedState = { 
       alertIsOpen: false,
       filterData: {
          pageNum: 1,
          limit: 30,
          field: 'dateAdded',
          order: 'asc',
          filterString: 'uni',
          tagInput: [],
          option: ""
       },
      tagData: ['uni'],
      };

      expect(tagsReducer(undefined, action)).toEqual(expectedState);
    });
  });
});