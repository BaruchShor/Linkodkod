import express from "express";
import { getAllPosts, createPost } from "../controlers/postControler.js";
import multer from "module";

//const uplaod = multer();

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
