import fs from "node:fs/promises";
import logger from "./logger.ts";
import { logFileNames } from "../enum/logFileNames.ts";
import { modelDir } from "../common/constants.ts";

export default async function readJSON(fileName: string) {
  try {
    const JSONdata = await fs.readFile(`${modelDir}/${fileName}`, "utf-8");

    if (!JSONdata) {
      throw new Error("Encountered an error while reading JSON.");
    }

    return JSON.parse(JSONdata);
  } catch (err: any) {
    logger(logFileNames.MODEL, err.message);
  }
}