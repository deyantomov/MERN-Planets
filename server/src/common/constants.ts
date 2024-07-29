import path from "node:path";
import { fileURLToPath } from "url";

//  not defined in ES modules
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const logDir = path.join(__dirname, "../logs");
