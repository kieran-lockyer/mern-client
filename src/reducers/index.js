import { combineReducers } from 'redux';
import welcomeReducer from './welcomeReducer';

export default combineReducers({
  // Insert all reducers here
  // Use these inside component with this.props
  // auth: authReducer
  welcome: welcomeReducer
})