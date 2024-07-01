import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "./utils/logger.ts";
import homeRouter from "./routes/index.ts";

//  load .env file
dotenv.config();
const port: number = Number(process.env.port) || 3000; //  grab port from env file (and cast to number) or set manually

//  app initialization
const app: Express = express();

//  app configuration (CORS and JSON)
app.use(cors());
app.use(express.json());

//  app configuration (routes)
app.use("/", homeRouter);

app.listen(port, async () => {
  try {
    await logger("server.log", `Server is listening on port ${port}.`);
  } catch (err: any) {
    console.error(err.message);
  }
});
