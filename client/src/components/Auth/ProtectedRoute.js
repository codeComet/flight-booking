import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const auth = JSON.parse(localStorage.getItem("admin"));
  console.log(auth?.isLogged);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth?.isLogged) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ path: "/signin", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
