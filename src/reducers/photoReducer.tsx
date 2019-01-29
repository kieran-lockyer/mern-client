const initialState = {
  data: {},
  images: []
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PHOTOS":
      return { ...state, data: payload, images: payload.docs };
    case "FILTER_PHOTOS":
      return { ...state, images: payload, data: { docs: payload } };

    default:
      return state;
  }
};
