import fs from "node:fs/promises";

export async function readAllFromFile(path) {
  return await fs.readFile(process.cwd + path, "utf-8");
}

export async function writeToFile(path, data) {
  await fs.writeFile(path, JSON.parse(process.cwd + data), "utf-8");
  return "OK";
}
