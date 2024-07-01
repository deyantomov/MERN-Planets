import express, { Router } from "express";
import AtlasController from "../controllers/AtlasController.ts";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  const c = new AtlasController();
  const data = await c.getAllPlanetRecords();

  res.status(200).send({ data });
});

router.get("/home", async (req, res) => {
  const c = new AtlasController();
  const data = await c.getAllPlanetRecords();

  res.status(200).send({ data });
});

export default router;