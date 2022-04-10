import express from "express";
import {
  createFlight,
  getFlights,
  getFlight,
  searchFlight,
  deleteFlight,
} from "../controllers/flights.js";

const router = express.Router();

router.get("/", getFlights);
router.get("/flights/:id", getFlight);
router.post("/", searchFlight);
router.post("/admin/addflight", createFlight);
router.delete("/admin/posts/:id", deleteFlight);

export default router;
