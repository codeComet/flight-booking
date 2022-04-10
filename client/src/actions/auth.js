import { signIn, signUp } from "../Api/requests";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signIn(formData);
    history.push("/admin");

    dispatch({
      type: "SIGN_IN",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signUp(formData);
    history.push("/admin");

    dispatch({
      type: "SIGN_UP",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT",
    });
  } catch (error) {
    console.log(error);
  }
};
