import mongoose from "mongoose";

const flightSchema = mongoose.Schema({
  from: String,
  to: String,
  price: String,
  flightType: String,
  airline: String,
  date: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
});

const FlightData = mongoose.model("FlightData", flightSchema);

export default FlightData;
