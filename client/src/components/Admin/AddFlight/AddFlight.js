import React, { useState } from "react";
import {
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  MenuItem,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useDispatch } from "react-redux";
import { createFlight } from "../../../actions/flights";
import "./addflight.css";

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
  { title: "Dhaka", code: "DAC" },
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

export default function AddFlight() {
  const dispatch = useDispatch();
  const dt = new Date().toLocaleDateString();
  // console.log(dt);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: dt,
    price: "",
    airline: "",
    flightType: "Return",
  });

  const defaultProps = {
    options: destinations,
    getOptionLabel: (option) => option.title,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createFlight(formData));

    console.log(formData);
    window.location.reload();
    clear();
  };

  const clear = () => {
    setFormData({
      from: "",
      to: "",
      price: "",
      airline: "",
      flightType: "Return",
    });
  };

  return (
    <div className="flight_parent">
      <div className="flight_form">
        <div className="from">
          <Autocomplete
            {...defaultProps}
            onChange={(event, value) => {
              if (value === null) value = "";
              setFormData({ ...formData, from: value.code });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                variant="outlined"
                required
                value={formData.from}
              />
            )}
          />
        </div>
        <div className="to">
          <Autocomplete
            {...defaultProps}
            onChange={(event, value) => {
              if (value === null) value = "";
              setFormData({ ...formData, to: value.code });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                variant="outlined"
                required
                value={formData.to}
              />
            )}
          />
        </div>
        <div className="price">
          <TextField
            label="Price"
            variant="outlined"
            required
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            value={formData.price}
          />
        </div>
        <div className="airline">
          <TextField
            select
            label="Airline"
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
        <div className="dates">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={formData.depart}
              disablePast
              inputFormat="dd/MM/yyyy"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  depart: e.toLocaleDateString(),
                })
              }
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
        </div>

        <div className="radio_buttons">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="trip"
              name="row-radio-buttons-group"
              value={formData.flightType}
              onChange={(e) =>
                setFormData({ ...formData, flightType: e.target.value })
              }
            >
              <FormControlLabel
                value="One Way"
                control={<Radio />}
                label="One Way"
              />
              <FormControlLabel
                value="Return"
                control={<Radio />}
                label="Return"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="submit">
          <Button
            className="submit_btn"
            variant="contained"
            color="error"
            onClick={handleSubmit}
            endIcon={<AddTaskIcon />}
          >
            Add Flight
          </Button>
        </div>
      </div>
    </div>
  );
}
