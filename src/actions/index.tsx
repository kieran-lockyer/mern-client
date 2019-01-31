import api from "../api";
import * as type from "./types";

// Fetch List of Tags
export const fetchTags = (
  pageNum,
  limit = 30,
  field = "dateAdded",
  order = "desc",
  label = ""
) => async dispatch => {
  const response = await api.get(
    `tags?pageNo=${pageNum}&limit=${limit}&field=${field}&order=${order}&label=${label}`
  );
  dispatch({ type: type.FETCH_TAGS, payload: response.data });
};

// Fetch List of Photos
export const fetchPhotos = (
  pageNum,
  limit = 30,
  field = "dateAdded",
  order = "desc",
  tags = ""
) => async dispatch => {
  const response = await api.get(
    `photos?pageNo=${pageNum}&limit=${limit}&field=${field}&order=${order}&tags=${tags}`
  );
  dispatch({ type: "SORT_PHOTOS", payload: response.data });
};

// Fetch images attached to specific tag
export const fetchTagPhotos = tag => async dispatch => {
  const response = await api.get(`/tags/images/${tag}`);
  dispatch({ type: type.FETCH_TAG_IMAGES, payload: response.data });
};
