import api from "../api";

// Fetch List of Tags
export const fetchTags = pageNum => async dispatch => {
  const response = await api.get(`/tags?pageNo=${pageNum}`);
  dispatch({ type: "FETCH_TAGS", payload: response.data });
};

// Fetch images attached to specific tag
export const fetchImages = tag => async dispatch => {
  const response = await api.get(`/tags/images/${tag}`);
  dispatch({ type: "FETCH_TAG_IMAGES", payload: response.data });
};

// Fetch List of Photos
export const fetchPhotos = pageNum => async dispatch => {
  const response = await api.get(`/photos?pageNo=${pageNum}`);
  dispatch({ type: "FETCH_PHOTOS", payload: response.data });
};

// Fetch List of Clients
export const fetchClients = () => async dispatch => {
  const response = await api.get("/clients");
  dispatch({ type: "FETCH_CLIENTS", payload: response.data });
};
