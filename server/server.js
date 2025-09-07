import express from "express";

const PORT = 3500;

const server = express();
server.use(express.json());

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
