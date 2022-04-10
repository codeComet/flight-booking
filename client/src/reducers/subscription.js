const initialState = {
  data: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SUBBED_USER":
      return { ...state, data: action.payload };

    case "CREATE_SUBBED_USER":
      return { ...state, data: { ...action.payload } };

    case "LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default reducer;
