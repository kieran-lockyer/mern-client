import api from "../api";
import * as type from "./types";

// Fetch List of Tags
export const fetchTags = pageNum => async dispatch => {
  const response = await api.get(`/tags?pageNo=${pageNum}`);
  dispatch({ type: type.FETCH_TAGS, payload: response.data });
};

// Filter photos
export const filterPhotos = tags => async dispatch => {
  const response = await api.get(`/photos/tag/${tags}`);
  dispatch({ type: type.FILTER_PHOTOS, payload: response.data });
};

// Fetch images attached to specific tag
export const fetchImages = tag => async dispatch => {
  const response = await api.get(`/tags/images/${tag}`);
  dispatch({ type: type.FETCH_TAG_IMAGES, payload: response.data });
};

// Fetch List of Photos
export const fetchPhotos = pageNum => async dispatch => {
  const response = await api.get(`/photos?pageNo=${pageNum}`);
  dispatch({ type: type.FETCH_PHOTOS, payload: response.data });
};
