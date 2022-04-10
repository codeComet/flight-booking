import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import "./Form.css";
import { searchFlight } from "../../actions/flights";
import { useHistory } from "react-router";

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

const numOfPassengers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const dt = new Date().toLocaleDateString();
  //console.log(dt);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    depart: dt,
    return: dt,
    noOfPassenger: 1,
    tripType: "Return",
  });

  const defaultProps = {
    options: destinations,
    getOptionLabel: (option) => option.title,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.tripType === "One Way")
      setFormData({ ...formData, return: "None" });

    dispatch(searchFlight(formData));
    history.push("/search");
    //console.log(formData);
  };

  return (
    <div className="form_parent">
      <div className="inner_form">
        <div className="from">
          <Autocomplete
            {...defaultProps}
            onChange={(event, value) => {
              if (value === null) value = "";
              setFormData({ ...formData, from: value.code });
            }}
            renderInput={(params) => (
              <TextField {...params} label="From" variant="outlined" required />
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
              <TextField {...params} label="To" variant="outlined" required />
            )}
          />
        </div>
        <div className="dates">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Departure Date"
              disablePast
              inputFormat="dd/MM/yyyy"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  depart: e.toLocaleDateString(),
                })
              }
              value={formData.depart}
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
        </div>
        <div className="dates">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Return Date"
              inputFormat="dd/MM/yyyy"
              disablePast
              disabled={formData.tripType === "One Way" ? true : false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  return: e.toLocaleDateString(),
                })
              }
              value={formData.return}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="dates">
          <FormControl className="passenger">
            <InputLabel id="passengerNo">No. of Passenger</InputLabel>
            <Select
              variant="outlined"
              labelId="passengerNo"
              value={formData.noOfPassenger}
              required
              label="No. of Passenger"
              onChange={(e) =>
                setFormData({ ...formData, noOfPassenger: e.target.value })
              }
            >
              {numOfPassengers.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="radio_buttons">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="trip"
              name="row-radio-buttons-group"
              value={formData.tripType}
              onChange={(e) =>
                setFormData({ ...formData, tripType: e.target.value })
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
            endIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
