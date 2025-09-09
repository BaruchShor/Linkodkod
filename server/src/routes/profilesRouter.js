import express from "express";
import {
  getAllProfiles,
  postNewProfile,
} from "../controlers/profilesControler.js";

const router = express.Router();

router.get("/", getAllProfiles);
router.post("/", postNewProfile);

export default router;
