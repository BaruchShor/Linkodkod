import express from "express";
import { getAllPosts, postNewPost } from "../controlers/postControler.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", postNewPost);

export default router;
