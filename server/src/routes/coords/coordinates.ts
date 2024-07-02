import express, { Router } from "express";
import PlanetController from "../../controllers/PlanetController.ts";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  const c = new PlanetController();
  await PlanetController.fetchPlanetData();

  const data = c.namesAndCoords;

  res.status(200).send({ data });
});

export default router;