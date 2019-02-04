import api from "../api";

// Fetch List of Tags + sort + pagination
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
  dispatch({ type: "FETCH_TAGS", payload: response.data });
};

// Fetch List of Photos + sort + pagination
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
  dispatch({ type: "FETCH_PHOTOS", payload: response.data });
};

// Fetch single image from tag id
export const fetchTagPhoto = tagId => async dispatch => {
  const response = await api.get(`/tags/images/single/${tagId}`);
  dispatch({
    type: "FETCH_TAG_IMAGE",
    payload: response.data
  });
};

// Fetch stats for dashboard
export const fetchStats = () => async dispatch => {
  const popTags = await api.get("/tags/stats/get/poptags");
  const trendingTags = await api.get("/tags/stats/get/trendingtags");
  const avgTags = await api.get("/tags/stats/get/avgtags");
  const avgPhotos = await api.get("/photos/stats/get/avgphotos");

  dispatch({
    type: "FETCH_STATS",
    popTags: popTags.data,
    trendingTags: trendingTags.data,
    avgTags: avgTags.data,
    avgPhoto: avgPhotos.data
  });
};

// Fetch data for the dashboard graph
export const fetchGraphData = numOfDays => async dispatch => {
  const tagData = await api.get(`/tags/stats/${numOfDays}`);
  const photoData = await api.get(`/photos/stats/${numOfDays}`);
  dispatch({
    type: "FETCH_GRAPH_DATA",
    tagData: tagData.data,
    photoData: photoData.data
  });
};
