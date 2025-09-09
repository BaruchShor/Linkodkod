import {
  readAllFromFile,
  createNewObj,
  updateObj,
  deleteObj,
} from "../DAL/CRUD.js";

const PATH = "../../db/postsDB.json";

export async function readFromPostsData() {
  try {
    const data = await readAllFromFile(PATH);
    if (data) return JSON.stringify(data);
    return [];
  } catch (error) {
    return error.message;
  }
}

export async function createNewPost(data) {
  try {
    return await createNewObj(PATH, data);
  } catch (error) {}
}
