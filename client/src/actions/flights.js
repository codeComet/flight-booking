import * as api from "../Api/requests";

export const getFlights = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });

    const { data } = await api.fetchFlights();

    dispatch({
      type: "GET_FLIGHTS",
      payload: data,
    });

    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFlight = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });

    const { data } = await api.fetchFlight(id);

    dispatch({
      type: "GET_FLIGHT",
      payload: data,
    });

    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createFlight = (newFlight) => async (dispatch) => {
  try {
    const { data } = await api.createFlight(newFlight);

    dispatch({
      type: "CREATE_FLIGHT",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchFlight = (flight) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });

    const { data } = await api.searchFlight(flight);
    // need to show loading animation
    dispatch({
      type: "SEARCH",
      payload: data,
    });

    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFlight = (id) => async (dispatch) => {
  await api.deleteFlight(id);
  dispatch({
    type: "DELETE",
    payload: id,
  });
};

export const setLoading = (status) => (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: status,
  });
};
