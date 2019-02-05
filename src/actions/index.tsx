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
  dispatch({ type: "FETCH_TAGS", tags: response.data, isLoading: false });
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
  dispatch({ type: "FETCH_PHOTOS", payload: response.data, isLoading: false });
};

// Fetch single image from tag id
export const fetchTagPhoto = tagId => async dispatch => {
  const tag = await api.get(`/tags/image/${tagId}`);
  const relatedTags = await api.get(`/tags/related/${tag.data[0].label}`);

  dispatch({
    type: "FETCH_TAG_IMAGE",
    tag: tag.data[0],
    relatedTags: relatedTags.data,
    isLoading: false
  });
};

// Fetch stats for dashboard
export const fetchStats = () => async dispatch => {
  const popTags = await api.get("/stats/poptags");
  const trendingTags = await api.get("/stats/trendingtags");
  const avgTags = await api.get("/stats/avgtags");
  const avgPhotos = await api.get("/stats/avgphotos");

  dispatch({
    type: "FETCH_STATS",
    popTags: popTags.data,
    trendingTags: trendingTags.data,
    avgTags: avgTags.data,
    avgPhoto: avgPhotos.data,
    isLoading: false
  });
};

// Fetch data for the dashboard graph
export const fetchGraphData = numOfDays => async dispatch => {
  const tagData = await api.get(`/stats?model=tags&days=${numOfDays}`);
  const photoData = await api.get(`/stats?model=photos&days=${numOfDays}`);
  dispatch({
    type: "FETCH_GRAPH_DATA",
    tagData: tagData.data,
    photoData: photoData.data,
    isLoading: false
  });
};
