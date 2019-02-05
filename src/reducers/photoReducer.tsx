const initialState = {
  filterData: {
    pageNum: 1,
    limit: 30,
    field: "dateAdded",
    order: "desc",
    option: "",
    tagInput: [],
    filterString: "",
    layoutType: "list"
  },
  photoData: {}
};

export default (
  state = initialState,
  {
    type,
    photoData,
    layoutType,
    tagInput,
    pageNum,
    limit,
    field,
    order,
    filterString,
    option
  }
) => {
  switch (type) {
    case "FETCH_PHOTOS":
      return {
        ...state,
        photoData,
        filterData: {
          ...state.filterData,
          pageNum,
          limit,
          field,
          order,
          filterString
        }
      };
    case "CHANGE_LAYOUT":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          layoutType
        }
      };
    case "PHOTO_FILTER":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          tagInput
        }
      };
    case "SET_PHOTO_OPTION":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          option
        }
      };
    default:
      return state;
  }
};
