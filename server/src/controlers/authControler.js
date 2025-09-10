import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  createNewProfile,
  findProfileByName,
} from "../services/profilesService.js";

export async function signUp(req, res) {
  try {
    const { name, id, password, description } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const user = {
      name: name,
      id: id,
      password: hashPassword,
      description: description,
      img: "http://localhost:3500/profileImages/profileImg.png",
    };
    const data = await createNewProfile(user);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function logIn(req, res) {
  try {
    const user = await findProfileByName(req.body.name);
    if (!user) {
      res.status(403).send("User does not exist.");
      return;
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) return res.status(403).res("Connect is faild.");
    const token = jwt.sign({ id: user.id, img: user.img }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.send({ message: "Log in successfully", token: token });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function validate(req, res) {
  const headerToken = req.headers["authorization"];
  if (!headerToken)
    return res.status(401).send({ valid: false, message: "No token provided" });

  const token = headerToken.split(" ")[1];
  if (!token)
    return res.status(401).send({ valid: false, message: "Token malformed" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    res.status(200).send({
      valid: true,
      user: {
        id: decoded.id,
      },
    });
  } catch (err) {
    res.status(401).send({ valid: false, message: "Token invalid or expired" });
  }
}
