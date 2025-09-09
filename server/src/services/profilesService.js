import {
  readAllFromFile,
  getObjById,
  getObjByName,
  createNewObj,
} from "../DAL/CRUD.js";

const PATH = "../../db/profilesDB.json";

export async function readFromProfilesData() {
  try {
    const data = await readAllFromFile(PATH);
    if (data) return JSON.stringify(data);
    return [];
  } catch (error) {
    return error.message;
  }
}

export async function findProfileById(id) {
  try {
    const user = await getObjById(PATH, id);
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function findProfileByName(name) {
  try {
    const user = await getObjByName(PATH, name);
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function createNewProfile(data) {
  try {
    return await createNewObj(PATH, data);
  } catch (error) {
    return error.message;
  }
}
