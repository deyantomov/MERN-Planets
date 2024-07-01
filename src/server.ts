import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

//  load .env file
dotenv.config();
const port: number = Number(process.env.port) || 3000;  //  grab port from env file (and cast to number) or set manually

//  app initialization
const app: Express = express();

//  app configuration (CORS and JSON)
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
});