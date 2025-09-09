import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import postsRouter from "./src/routes/postRouter.js";
import profilesRouter from "./src/routes/profilesRouter.js";
import authRouter from "./src/routes/authRouter.js";

const PORT = 3500;

const server = express();
server.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
server.use(express.json());
server.use(express.static("public"));
server.use("/auth", authRouter);
server.use("/posts", postsRouter);
server.use("/profiles", profilesRouter);

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT} !!!`);
});
