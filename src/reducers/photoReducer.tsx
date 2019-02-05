const initialState = {
  filterData: {
    pageNum: 1,
    limit: 30,
    field: "dateAdded",
    order: "desc",
    option: "",
    tagInput: [],
    filterString: "",
    layoutType: "list",
    isLoading: true
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
    currentPage,
    pageNum,
    limit,
    field,
    order,
    filterString,
    currentOption
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
    case "ADD_TAG_INPUT":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          tagInput
        }
      };
    case "SET_OPTION":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          option: currentOption
        }
      };
    default:
      return state;
  }
};
