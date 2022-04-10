import mongoose from "mongoose";
import FlightData from "../models/flightModel.js";

export const getFlights = async (req, res) => {
  try {
    const flights = await FlightData.find();

    res.status(200).json(flights);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getFlight = async (req, res) => {
  const { id } = req.params;
  try {
    const flights = await FlightData.findById(id);

    res.status(200).json(flights);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createFlight = async (req, res) => {
  const flight = req.body;

  const newFlight = new FlightData(flight);

  try {
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const deleteFlight = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No flight with this ID");

  try {
    await FlightData.findByIdAndDelete(id);

    res.json({ message: "Flight deleted successfully!" });
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const searchFlight = async (req, res) => {
  const { from, to } = req.body;

  try {
    const result = await FlightData.find({ from: from, to: to });
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
