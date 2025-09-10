import multer from "module";

const uplaod = multer({ storage: "http://localhost:3500/profileImages/" });

const middleUplaod = (req, res, next) => {
  try {
    uplaod.s
  } catch (error) {
    res.status(401).send(error.message);
  }
};
