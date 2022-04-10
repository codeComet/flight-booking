export const reducer = (
  state = { authData: null, isLogged: false },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      localStorage.setItem(
        "admin",
        JSON.stringify({ isLogged: true, ...action.payload })
      );
      return { isLogged: true, authData: action.payload };

    case "SIGN_UP":
      localStorage.setItem(
        "admin_reg",
        JSON.stringify({ isLogged: true, ...action.payload })
      );

      return { isLogged: true, authData: action.payload };

    case "LOGOUT":
      localStorage.clear();

      return { isLogged: false, authData: null };

    default:
      return state;
  }
};

export default reducer;
