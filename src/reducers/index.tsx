import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
  tags: tagsReducer,
  photos: photoReducer
});
