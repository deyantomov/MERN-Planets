import { logFileNames } from "../enums/logFileNames.ts";
import logger from "./logger.ts";
import readJSON from "./readJSON.ts";

export default async function schemaValidator(schemaFileName: string, objectToValidate: object, index: number) {
  try {
    const { required, properties } = await readJSON(schemaFileName);
    const [keys, values] = [Object.keys(objectToValidate), Object.values(objectToValidate)];
    
    required.forEach((key: string) => {
      if (!keys.includes(key)) {
        throw new Error(`Object at index ${index} is missing a required key: ${key}`);
      }
    });

    //  TODO: Validate types 

    return true;
  } catch (err: any) {
    logger(logFileNames.MODEL, err.message);
    return false;
  }

}