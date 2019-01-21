import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";

export default combineReducers({
  tags: tagsReducer
});
