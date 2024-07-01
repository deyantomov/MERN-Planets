import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "./utils/logger.ts";
import AtlasController from "./controller/AtlasController.ts";
import schemaValidator from "./utils/schemaValidator.ts";
import { modelFileNames } from "./enum/modelFileNames.ts";

//  load .env file
dotenv.config();
const port: number = Number(process.env.port) || 3000; //  grab port from env file (and cast to number) or set manually

//  app initialization
const app: Express = express();

//  app configuration (CORS and JSON)
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  try {
    await logger("server.log", `Server is listening on port ${port}.`);

    const c = new AtlasController();
    const planetRecords = await c.getAllPlanetRecords();

    console.log(planetRecords);

    //  O(n^2) complexity for array schema validations
    if (planetRecords) {
      planetRecords.forEach(async (record, index) => {
        console.log(await schemaValidator(modelFileNames.PLANET_RECORD, record, index));
      });
    }
  } catch (err: any) {
    console.error(err.message);
  }
});
