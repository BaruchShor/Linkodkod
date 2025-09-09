import {
  readFromProfilesData,
  writeToProfilesData,
} from "../services/profilesService.js";

export const getAllProfiles = async (req, res) => {
  try {
    const posts = await readFromProfilesData();
    res.status(200).send(posts);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const postNewProfile = async (req, res) => {
  try {
    await writeToProfilesData(req.body);
    res.status(201).send("Post adde successfuly");
  } catch (error) {
    res.status(500).send("Added post faild");
  }
};
