export default (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_PHOTOS":
      return payload;
    default:
      return state;
  }
};
