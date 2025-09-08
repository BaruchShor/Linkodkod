import { readAllFromFile, writeToFile } from "../DAL/CRUD.js";

export async function readFromPostsData() {
  try {
    const data = await readAllFromFile("../../db/postsDB.json");
    if (data) return JSON.stringify(data);
    return [];
  } catch (error) {
    return error.message;
  }
}

export async function writeToPostsData(data) {
  return await writeToFile("../../db/postsDB.json", data);
}
