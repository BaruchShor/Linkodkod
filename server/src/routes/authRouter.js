import express from "express";
import { logIn, signUp, validate } from "../controlers/authControler.js";

const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);
router.get("/validate", validate);

export default router;
