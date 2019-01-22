import api from "../api";

// Fetch List of Tags from Database
export const fetchTags = () => async dispatch => {
  const response = await api.get("/tags");
  dispatch({ type: "FETCH_TAGS", payload: response.data });
};

// Fetch List of Photos from Database
export const fetchPhotos = () => async dispatch => {
  const response = await api.get("/photos");
  dispatch({ type: "FETCH_PHOTOS", payload: response.data });
};

// Fetch List of Photos from Database
export const fetchClients = () => async dispatch => {
  const response = await api.get("/clients");
  dispatch({ type: "FETCH_CLIENTS", payload: response.data });
};
