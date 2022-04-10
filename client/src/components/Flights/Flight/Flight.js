import React from "react";
import { Card, Button } from "react-bootstrap";
import { FlightTakeoff } from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../actions/flights";

const Flight = ({ flight }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const openDetails = (id) => {
    dispatch(setLoading(true));
    history.push(`/flights/${id}`);
  };
  return (
    <div className="flights pt-4 pb-3 d-flex justify-content-around align-items-center flex-wrap">
      {flight.map((flight) => (
        <Card style={{ width: "18rem", margin: "20px 0px" }} key={flight._id}>
          <Card.Header>
            <div className="d-flex justify-content-center align-items-center">
              {/* <div className="date">
                <h6>{flight.date.split("T")[0]}</h6>
              </div> */}
              <div className="d-flex justify-content-between align-items-center dest">
                <h6>{flight.from}</h6>
                <FlightTakeoff style={{ margin: "0px 15px" }} />
                <h6>{flight.to}</h6>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="flight_details d-flex justify-content-between align-items-center">
              <div className="flight_name">
                <h6 className="text-secondary">{flight.airline}</h6>
                <h5 className="text-success" style={{ textAlign: "left" }}>
                  {flight.flightType}
                </h5>
              </div>
              <div className="flight_price">
                <span className="text-muted" style={{ fontSize: "12px" }}>
                  Starting from{" "}
                </span>
                <br />
                <h4>${flight.price}</h4>
                <span
                  style={{
                    color: "red ",
                    position: "absolute",
                    top: "46%",
                    right: "18px",
                  }}
                >
                  *
                </span>
              </div>
            </div>

            <div className="action_btn" style={{ textAlign: "right" }}>
              <Button variant="primary" onClick={() => openDetails(flight._id)}>
                Check <ArrowRightAltIcon />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Flight;
