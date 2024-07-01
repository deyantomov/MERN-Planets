import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "./common/logger.ts";
import AtlasController from "./controller/AtlasController.ts";

//  load .env file
dotenv.config();
const port: number = Number(process.env.port) || 3000;  //  grab port from env file (and cast to number) or set manually

//  app initialization
const app: Express = express();

//  app configuration (CORS and JSON)
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  try {
    await logger("server.log", `Server is listening on port ${port}.`);
  
    const c = new AtlasController();
    c.ping();
  } catch (err: any) {
    console.error(err.message);
  }
});