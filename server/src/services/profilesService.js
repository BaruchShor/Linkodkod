import { readAllFromFile, writeToFile } from "../DAL/CRUD.js";

export async function readFromProfilesData() {
  try {
    const data = await readAllFromFile("../../db/profilesDB.json");
    if (data) return JSON.stringify(data);
    return [];
  } catch (error) {
    return error.message;
  }
}

export async function writeToProfilesData(data) {
  return await writeToFile("../../db/profilesDB.json", data);
}
