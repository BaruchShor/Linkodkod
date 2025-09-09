import {
  readFromProfilesData,
  findProfileById,
  createNewProfile,
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
    await createNewProfile(req.body);
    res.status(201).send("Profile adde successfuly");
  } catch (error) {
    res.status(500).send("Added profile faild");
  }
};
