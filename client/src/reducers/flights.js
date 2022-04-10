const initialState = {
  data: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FLIGHTS":
      localStorage.setItem("flights", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
      };

    case "GET_FLIGHT":
      return { ...state, data: action.payload };

    case "CREATE_FLIGHT":
      return { ...state, data: { ...action.payload } };

    case "DELETE":
      return state.data.filter((flight) => flight._id !== action.payload);

    case "SEARCH":
      localStorage.setItem("search", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
      };

    case "LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default reducer;
