import React, { useState, useEffect } from "react";
import Flight from "./Flight/Flight";
// import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import "./Flights.css";
import { getFlights } from "../../actions/flights";

const Flights = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  //console.log(flights);

  const flightsLocal = JSON.parse(localStorage.getItem("flights")) || [];
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(100);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = flightsLocal.slice(indexOfFirstPost, indexOfLastPost);
  // console.log("current", currentPosts);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  return (
    <div
      className="flights_parent container pt-4 pb-5 text-center"
      id="flights"
    >
      <div className="flights_header pt-5">
        <h3>Affordable flights to anywhere from Australia</h3>
      </div>
      <div>
        {flights.loading ? (
          <CircularProgress />
        ) : (
          <div>
            <Flight flight={currentPosts} />
          </div>
        )}
      </div>
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={flightsLocal.length}
        paginate={paginate}
      /> */}
      <div className="star">
        <div className="star_list">
          <span>*</span>
          <p>All the prices are tax inclusive.</p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>Prices are subject to availability and starting price only.</p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>Price may change without any notice.</p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>
            Always check your travel details carefully including name and travel
            date.
          </p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>
            Always check your name that is spelled exactly according to the
            passport.
          </p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>Only make the payment once travel details are correct.</p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>Please check your visa requirements before purchasing a ticket.</p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>
            Travel agents do not have authority on any kind of visa suggestion.
          </p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>
            Please check appropriate websites to know if you are eligible to
            travel or what your requirements are for travel.
          </p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>
            If any way you find there is a mistake on the ticket, we will try
            our best to resolve the issue (fees may apply).
          </p>
        </div>
        <div className="star_list">
          <span>*</span>
          <p>
            There is a non-refundable twenty-dollar fee for every ticket you
            purchase, processing re-issue and refund.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flights;
