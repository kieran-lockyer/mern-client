import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";
import photoReducer from "./photoReducer";
import statsReducer from "./statsReducer";
import graphReducer from "./graphReducer";

export default combineReducers({
  tags: tagsReducer,
  photos: photoReducer,
  stats: statsReducer,
  graph: graphReducer
});
