import express from "express";
import { getSubbedUser, createSubUser } from "../controllers/subscription.js";

const router = express.Router();

router.get("/admin/users", getSubbedUser);
router.post("/subscribe", createSubUser);

export default router;
