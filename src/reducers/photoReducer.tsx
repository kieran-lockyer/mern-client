const initialState = {
  data: {},
  images: []
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PHOTOS":
      return { ...state, data: payload, images: payload.docs };

    default:
      return state;
  }
};
