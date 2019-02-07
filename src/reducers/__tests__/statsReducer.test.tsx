import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import statsReducer from '../statsReducer';


describe('statsReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: "FETCH_STATS" };
      const initialState = { isLoading: false, popTags: undefined, 
        trendingTags: undefined,
        avgTags: undefined,
        avgPhoto: undefined  };
      expect(statsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe("FETCH_STATS", () => {
    test('returns the correct state', () => {
      const action = { 
        type: "FETCH_STATS", 
        popTags: [1], 
        trendingTags: [1],
        avgTags: [1],
        avgPhoto: [1] 
      };
      const expectedState = { popTags: [1], 
        trendingTags: [1],
        avgTags: [1],
        avgPhoto: [1] , isLoading: false };

      expect(statsReducer(undefined, action)).toEqual(expectedState);
    });
  });
});