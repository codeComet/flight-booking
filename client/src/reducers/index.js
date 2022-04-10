import { combineReducers } from "redux";
import flights from "./flights";
import subscription from "./subscription";
import auth from "./auth";

export default combineReducers({
  flights,
  subscription,
  auth,
});
