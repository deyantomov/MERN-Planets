import logger from "../utils/logger.ts";
import { logFileNames } from "../enums/logFileNames.ts";
import AtlasController from "./AtlasController.ts";
import { TPlanetDataArray } from "../types/Planet.ts";
import { planetCoords } from "../common/constants.ts";

export default class PlanetController {
  private static _names: TPlanetDataArray | void = undefined;

  constructor() {}

  get names() {
    return PlanetController._names;
  }

  get namesAndCoords() {
    const coordObj: { [key: string]: number[] } = {};
  
    for (const planet of PlanetController._names as TPlanetDataArray) {
      coordObj[planet.name] = (planetCoords as { [key: string]: number[] })[planet.name];
    }
  
    return coordObj;
  }

  public static async fetchPlanetData() {
    PlanetController._names = await PlanetController._buildQuery([PlanetController._projectName, PlanetController._limitThree]);
  }

  private static async _buildQuery(
    methods: ((q?: any) => any)[] = []
  ): Promise<TPlanetDataArray | void> {
    const c = new AtlasController();

    const data = await c.getAllPlanetRecords(methods);
    return data;
  }

  private static _projectName(q: any) {
    logger(logFileNames.DB, "Created a name projection");
    return q.project({ name: 1, _id: 0 });
  }

  private static _limitThree(q: any) {
    logger(logFileNames.DB, "Created a limit of size 3 on the response");
    return q.limit(3);
  }
}
