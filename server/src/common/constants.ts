import path from "node:path";
import { fileURLToPath } from "url";

//  not defined in ES modules
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const logDir = path.join(__dirname, "../logs");
export const modelDir = path.join(__dirname, "../model");

export const planetSizes = {
  "Mercury": [1, 2, 3],
  "Venus": [2, 3, 4],
  "Earth": [3, 4, 5],
  "Mars": [4, 5, 6],
  "Jupiter": [5, 6, 7],
  "Saturn": [6, 7, 8],
  "Uranus": [7, 8, 9],
  "Neptune": [8, 9, 10],
}