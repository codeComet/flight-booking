import express from "express";
import { signIn, signUp } from "../controllers/auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signUp", signUp);

export default router;
