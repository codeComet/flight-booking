import { useEffect, useState } from "react";
import {
  Home,
  Admin,
  Search,
  Subscription,
  Navbar,
  NavbarInfo,
  FlightDetails,
  SignIn,
  SignUp,
  Footer,
  ProtectedRoute,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [pathName, setPathName] = useState(false);

  let path = window.location.pathname;
  useEffect(() => {
    if (path.startsWith("/admin")) {
      setPathName(true);
    } else {
      setPathName(false);
    }
  }, [path]);

  //console.log("app", path);

  return (
    <div className="App">
      <Router>
        {!pathName && <NavbarInfo />}
        {!pathName && <Navbar />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/subscribe">
            <Subscription />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/flights/:id">
            <FlightDetails />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
      {!pathName && <Footer />}
    </div>
  );
};

export default App;
