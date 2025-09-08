import express from "express";
import postsRouter from "./src/routes/postRouter.js";

const PORT = 3500;

const server = express();
server.use(express.json());
server.use(express.static("public"));
server.use("/posts", postsRouter);

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT} !!!`);
});
