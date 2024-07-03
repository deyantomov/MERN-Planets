import path from "node:path";
import { fileURLToPath } from "url";

//  not defined in ES modules
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const logDir = path.join(__dirname, "../logs");

let baseDistance = 0.1;

export function updatePlanetDistances() {
  planetCoords.Mercury = [baseDistance, baseDistance + 1, baseDistance + 2];
  planetCoords.Venus = [baseDistance + 3, baseDistance + 4, baseDistance + 5];
  planetCoords.Earth = [baseDistance + 6, baseDistance + 7, baseDistance + 8];
  planetCoords.Mars = [baseDistance + 9, baseDistance + 10, baseDistance + 11];
  planetCoords.Jupiter = [baseDistance + 12, baseDistance + 13, baseDistance + 14];
  planetCoords.Saturn = [baseDistance + 15, baseDistance + 16, baseDistance + 17];
  planetCoords.Uranus = [baseDistance + 18, baseDistance + 19, baseDistance + 20];
  planetCoords.Neptune = [baseDistance + 21, baseDistance + 22, baseDistance + 23];
}

export const planetCoords = {
  "Mercury": [baseDistance, baseDistance + 1, baseDistance + 2],
  "Venus": [baseDistance + 3, baseDistance + 4, baseDistance + 5],
  "Earth": [baseDistance + 6, baseDistance + 7, baseDistance + 8],
  "Mars": [baseDistance + 9, baseDistance + 10, baseDistance + 11],
  "Jupiter": [baseDistance + 12, baseDistance + 13, baseDistance + 14],
  "Saturn": [baseDistance + 15, baseDistance + 16, baseDistance + 17],
  "Uranus": [baseDistance + 18, baseDistance + 19, baseDistance + 20],
  "Neptune": [baseDistance + 21, baseDistance + 22, baseDistance + 23],
}