import { getSubbedUser, createSubUser } from "../Api/requests";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });

    const { data } = await getSubbedUser();

    dispatch({
      type: "GET_SUBBED_USER",
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

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await createSubUser(user);
    console.log("data", data);
    dispatch({
      type: "CREATE_SUBBED_USER",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
