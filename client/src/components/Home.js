import React, { useEffect } from "react";
import { Header, Flights } from "./index";
import { useDispatch } from "react-redux";
import { getFlights } from "../actions/flights";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
    //window.location.reload();
  }, [dispatch, location]);

  return (
    <div>
      <Header />
      <Flights />
    </div>
  );
};

export default Home;
