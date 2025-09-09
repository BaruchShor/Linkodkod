import fs from "node:fs/promises";

export async function readAllFromFile(path) {
  try {
    const data = await fs.readFile(process.cwd + path, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return error.message;
  }
}

export async function writeToFile(path, data) {
  try {
    await fs.writeFile(path, JSON.stringify(process.cwd + data), "utf-8");
    return "OK";
  } catch (error) {
    return error.message;
  }
}

export async function createNewObj(path, newData) {
  try {
    const data = await readAllFromFile(path);
    data.push(newData);
    await writeToFile(path, data);
  } catch (error) {
    error.message;
  }
}

export async function updateObj(path, upObj) {
  try {
    const data = await readAllFromFile(path);
    if (data != []) {
      let updatededObj = data.find((obj) => obj.id === upObj.idParameter);
      updatededObj[upObj.parameterToChange] = upObj.newParameter;
      await writeToFile(path, data);
    }
  } catch (error) {
    return error.message;
  }
}

export async function deleteObj(path, id) {
  try {
    const data = await readAllFromFile(path);
    if (data != []) {
      const indexToDel = data.findIndex((obj) => obj.id == id);
      data.splice(indexToDel, 1);
      await writeToFile(path, data);
    }
  } catch (error) {
    return error.message;
  }
}
