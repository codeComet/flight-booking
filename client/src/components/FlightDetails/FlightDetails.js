import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  MenuItem,
  Snackbar,
  IconButton,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFlight } from "../../actions/flights";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { send } from "emailjs-com";
import "./Details.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const adult = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  },
];

const child = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

const gender = [
  {
    value: "Mr.",
    label: "Mr.",
  },
  {
    value: "Ms.",
    label: "Ms.",
  },
];

const airlines = [
  {
    value: "Singapore Airlines",
    label: "Singapore Airlines",
  },
  {
    value: "Malaysia Airlines",
    label: "Malaysia Airlines",
  },
  {
    value: "Thai Airways",
    label: "Thai Airways",
  },
  {
    value: "Emirates",
    label: "Emirates",
  },
  {
    value: "Qatar Airways",
    label: "Qatar Airways",
  },
];

const destinations = [
  { title: "Sydney, Au", code: "SYD" },
  { title: "Melbourne, Au", code: "MEL" },
  { title: "Hobart, Au", code: "HBA" },
  { title: "Darwin, Au", code: "DRW" },
  { title: "Canberra, Au", code: "CBR" },
  { title: "Aden", code: "ADE" },
  { title: "Abu Dhabi", code: "AUH" },
  { title: "Adelaide", code: "ADL" },
  { title: "Aleppo", code: "ALP" },
  { title: "Alice Spring", code: "ASP" },
  { title: "Amritsar", code: "ATQ" },
  { title: "Athens", code: "ATH" },
  { title: "Auckland", code: "AKL" },
  { title: "Bangalore", code: "BLR" },
  { title: "Bali-Denpasar", code: "DPS" },
  { title: "Bangkok", code: "BKK" },
  { title: "Bankstown", code: "BWU" },
  { title: "Beijing", code: "PEK" },
  { title: "Beirut", code: "BEY" },
  { title: "Brisbane", code: "BNE" },
  { title: "Cairns", code: "CNS" },
  { title: "Cairo", code: "CAL" },
  { title: "Chennai/Madras", code: "MAA" },
  { title: "Chengdu", code: "CTU" },
  { title: "Dallas", code: "DFW" },
  { title: "Dubai", code: "DXB" },
  { title: "Delhi", code: "DEL" },
  { title: "Dhaka", code: "DRW" },
  { title: "Doha", code: "DOH" },
  { title: "Fiji-Nadi", code: "NAN" },
  { title: "Fiji-Suva Nausori", code: "SUV" },
  { title: "Frankfurt", code: "FRA" },
  { title: "Goa", code: "GOI" },
  { title: "Hong Kong", code: "HKG" },
  { title: "Ho Chi Ming city", code: "SGN" },
  { title: "Hyderabad", code: "HYD" },
  { title: "Islamabad", code: "ISB" },
  { title: "Istanbul", code: "IST" },
  { title: "Jeddah", code: "JED" },
  { title: "Kabul", code: "KBL" },
  { title: "Karachi", code: "KHI" },
  { title: "Kolkata", code: "CCU" },
  { title: "Kuala Lumpur", code: "KUL" },
  { title: "Kuwait", code: "KWI" },
  { title: "Las Vegas", code: "LAS" },
  { title: "Lima", code: "LIM" },
  { title: "London(Heathrow)", code: "LHR" },
  { title: "Lagos", code: "LOS" },
  { title: "Lahore", code: "LHE" },
  { title: "London(Gatwick)", code: "GTW" },
  { title: "Los Angeles", code: "LAX" },
  { title: "Madrid", code: "MAD" },
  { title: "Male", code: "MLE" },
  { title: "Macau", code: "MFM" },
  { title: "Manila", code: "MNL" },
  { title: "Miami", code: "MIA" },
  { title: "Monterrey", code: "MTY" },
  { title: "Munich", code: "MUC" },
  { title: "Mumbai", code: "BOM" },
  { title: "New York", code: "JFK" },
  { title: "New Caledonia", code: "NOU" },
  { title: "Orlando", code: "MCO" },
  { title: "Paris", code: "CDG" },
  { title: "Penang", code: "PEN" },
  { title: "Patna", code: "PAT" },
  { title: "Peth", code: "PER" },
  { title: "Rio De Janeiro", code: "GIG" },
  { title: "Riyadh", code: "RUH" },
  { title: "Rome", code: "FCO" },
  { title: "San Diego", code: "SAN" },
  { title: "Seoul", code: "ICN" },
  { title: "Shanghai(Pudong)", code: "PVG" },
  { title: "Sharjah", code: "SHJ" },
  { title: "Singapore", code: "SIN" },
  { title: "San Francisco", code: "SFO" },
  { title: "Shanghai(Hong Qiao)", code: "SHA" },
  { title: "Shenzhen", code: "SZX" },
  { title: "Tokyo(Narita)", code: "NRT" },
  { title: "Tokyo(Haneda)", code: "HND" },
  { title: "Washington(Dulles)", code: "IAD" },
  { title: "Washington(Roanld Regan)", code: "DCA" },
  { title: "Yangon", code: "RGN" },
];

const FlightDetails = () => {
  const flight = useSelector((state) => state.flights);
  const [open, setOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const dt = new Date().toLocaleDateString();
  const [formData, setFormData] = useState({
    title: "Mr.",
    lastName: "",
    firstName: "",
    email: "",
    mobile: "",
    departureCity: "",
    returnCity: "",
    departureDate: dt,
    returnDate: dt,
    airline: "Singapore Airlines",
    adult: 1,
    child: 0,
    infant: 0,
  });

  const defaultProps = {
    options: destinations,
    getOptionLabel: (option) => option.title,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // email js
    send(
      "service_lmdt2z6",
      "template_1yvkfuu",
      formData,
      "user_944gIlggulVr4NaPhVRH1"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    clear();
    handleSnackBarOpen();
    handleClose();
  };

  const clear = () => {
    setFormData({
      title: "Mr.",
      lastName: "",
      firstName: "",
      email: "",
      mobile: "",
      departureCity: "",
      returnCity: "",
      departureDate: dt,
      returnDate: dt,
      airline: "Singapore Airlines",
    });
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar(false);
  };

  const handleSnackBarOpen = () => setSnackBar(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFlight(id));
  }, [id, dispatch]);

  // Snackbar
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackBarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className="details_parent">
      {flight.loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <div className="details_container">
          <div className="form_data">
            <span>From</span>
            <h3>{flight?.data?.from}</h3>
          </div>
          <div className="form_data">
            <span>To</span>
            <h3>{flight?.data?.to}</h3>
          </div>
          {/* <div className="form_data">
            <span>Airline</span>
            <h3>{flight?.data?.airline}</h3>
          </div> */}
          <div className="form_data">
            <span>Trip type</span>
            <h3>{flight?.data?.flightType}</h3>
          </div>
          {/* <div className="form_data">
            <span>Date(yyyy-mm-dd)</span>
            <h3>{flight?.data?.date.split("T")[0]}</h3>
          </div> */}
          <div className="form_data">
            <span>Price</span>
            <h1>${flight?.data?.price}</h1>
          </div>
          <div className="form_data">
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={handleOpen}
            >
              Send Enquiry
            </Button>
          </div>
        </div>
      )}

      {/* Form */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "scroll" }}
      >
        <Box sx={style} className="modal_container">
          <Typography className="details_header" variant="h6" component="h2">
            Please fill out the details
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <TextField
                className="space_right"
                select
                label="Select"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className="space_right"
                label="Given Name"
                variant="outlined"
                required
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                value={formData.firstName}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                required
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                value={formData.lastName}
              />
            </div>
            <div className="email">
              <TextField
                className="space_right"
                label="Email"
                variant="outlined"
                required
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />
              <TextField
                label="Mobile Number"
                variant="outlined"
                required
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                value={formData.mobile}
              />
            </div>
            <div className="city">
              <Autocomplete
                className="space_right"
                {...defaultProps}
                onChange={(event, value) => {
                  if (value === null) value = "";
                  setFormData({ ...formData, departureCity: value.code });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Departure City"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Autocomplete
                {...defaultProps}
                onChange={(event, value) => {
                  if (value === null) value = "";
                  setFormData({ ...formData, returnCity: value.code });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Return City"
                    variant="outlined"
                    required
                  />
                )}
              />
            </div>
            <div className="persons">
              <TextField
                className="space_right"
                select
                label="No. of Adult"
                onChange={(e) =>
                  setFormData({ ...formData, adult: e.target.value })
                }
                value={formData.adult}
              >
                {adult.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className="space_right"
                select
                label="No. of Child"
                onChange={(e) =>
                  setFormData({ ...formData, child: e.target.value })
                }
                value={formData.child}
              >
                {child.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="No. of Infant"
                onChange={(e) =>
                  setFormData({ ...formData, infant: e.target.value })
                }
                value={formData.infant}
              >
                {child.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="dates">
              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Departure Date"
                    value={formData.departureDate}
                    disablePast
                    inputFormat="dd/MM/yyyy"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureDate: e.toLocaleDateString(),
                      })
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Return Date"
                    value={formData.returnDate}
                    disablePast
                    inputFormat="dd/MM/yyyy"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        returnDate: e.toLocaleDateString(),
                      })
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="airline">
              <TextField
                select
                label="Preferred Airline"
                onChange={(e) =>
                  setFormData({ ...formData, airline: e.target.value })
                }
                value={formData.airline}
              >
                {airlines.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <Button
                className="details_btn"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* Snackbar */}
      <div>
        <Snackbar
          open={snackBar}
          autoHideDuration={7000}
          onClose={handleSnackBarClose}
          action={action}
        >
          <Alert onClose={handleSnackBarClose} severity="success">
            We have received your query. We will contact you shortly.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default FlightDetails;
