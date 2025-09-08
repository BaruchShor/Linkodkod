import fs from "node:fs/promises";

export async function readAllFromFile(path) {
  const data = await fs.readFile(process.cwd + path, "utf-8");
  return JSON.parse(data);
}

export async function writeToFile(path, data) {
  await fs.writeFile(path, JSON.parse(process.cwd + data), "utf-8");
  return "OK";
}
