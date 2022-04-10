import "./Search.css";
import { useSelector } from "react-redux";
import Flight from "../Flights/Flight/Flight";
// import { CircularProgress } from "@mui/material";

const Search = () => {
  // const flights = useSelector((state) => state.flights);
  // console.log(flights);
  const flight = JSON.parse(localStorage.getItem("search")) || [];
  // console.log("search", flight);

  return (
    <div className="search_parent">
      <div className="search_container">
        {flight.length !== 0 ? (
          <div>
            <h1>Search results: </h1>
            <div>
              <Flight flight={flight} />
            </div>
          </div>
        ) : (
          <div>
            <h1>No results found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
