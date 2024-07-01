import fs from "node:fs/promises";
import path from "node:path";
import { logDir } from "./constants.ts";

export default async function logger(fileName: string, message: string) {
  try {
    console.log(message);
    await fs.mkdir(logDir, { recursive: true });
    await fs.writeFile(path.join(logDir, fileName), `LOG: ${new Date().toISOString()}: ${message}\n`, { flag: "a" });
  } catch (err: any) {
    throw new Error(err); //  will throw again, so it should be wrapped in a try/catch
  }
}