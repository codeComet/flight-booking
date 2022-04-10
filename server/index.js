import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import flights from "./routes/flights.js";
import subscription from "./routes/subscription.js";
import auth from "./routes/auth.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.json({ urlencoded: "30mb", extended: true }));
app.use(cors());

app.use("/", flights);
app.use("/", subscription);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("welcome to king holidays");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
