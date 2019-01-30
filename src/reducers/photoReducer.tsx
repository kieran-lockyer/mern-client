const initialState = {
  data: {}
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PHOTOS":
      return { ...state, data: payload };
    case "FILTER_PHOTOS":
      return { ...state, data: { docs: payload } };
    case "SORT_PHOTOS":
      return { ...state, data: payload };
    default:
      return state;
  }
};
