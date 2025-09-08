import {
  readFromPostsData,
  writeToPostsData,
} from "../services/postService.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await readFromPostsData();
    res.status(200).send(posts);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const postNewPost = async (req, res) => {
  try {
    await writeToPostsData(req.body);
    res.status(201).send("Post adde successfuly");
  } catch (error) {
    res.status(500).send("Added post faild");
  }
};
