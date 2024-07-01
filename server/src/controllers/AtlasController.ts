import { MongoClient, WithId, Document } from "mongodb";
import logger from "../utils/logger.ts";
import { logFileNames } from "../enums/logFileNames.ts";

type TClient = MongoClient | undefined;
type TPlanetDataArray = WithId<Document>[];

export default class AtlasController {
  private _atlasUri: string;
  private _client: TClient;

  constructor() {
    this._atlasUri = process.env.atlas_uri || "";

    try {
      this._validateAtlasUri(this._atlasUri);
      this._client = new MongoClient(this._atlasUri);
    } catch (err: any) {
      const logError = async () => {
        await logger(logFileNames.DB, err.message);
      };

      logError();
    }
  }

  /**
   * Attempts to connect to the Atlas deployment, and sends a ping to confirm the connection.
   * If it's successful, a success message is logged. If not - an error message.
   * Finally, it closes the connection.
   */
  public async ping(): Promise<void> {
    try {
      this._validateClient(this._client);

      //  connect to Atlas
      await this._client?.connect();

      //  send a ping to confirm Atlas connection
      this._client?.db("admin").command({ ping: 1 });
      await logger(logFileNames.DB, "Ping was successful.");
    } catch (err: any) {
      await logger(logFileNames.DB, err.message);
    } finally {
      await this._closeAtlasConnection();
    }
  }

  /**
   * Gets records for all the planets in the solar system from the database
   * @async
   */
  public async getAllPlanetRecords(): Promise<TPlanetDataArray | void> {
    try {
      this._validateClient(this._client);

      //  connect to Atlas
      this._client?.connect();

      //  if client is not falsy, grab all planet records and cast the returned cursor to an array
      const planetData =
        this._client &&
        (await this._client
          .db("sample_guides")
          .collection("planets")
          .find()
          .toArray());

      this._validatePlanetData(planetData);

      logger(
        logFileNames.DB,
        "Successfully grabbed data about all of the planets in the solar system."
      );
      return planetData;
    } catch (err: any) {
      logger(logFileNames.DB, err.message);
    } finally {
      await this._closeAtlasConnection();
    }
  }

  /**
   * Validates the Atlas URI (comes from the .env file)
   * @param uri Atlas URI
   */
  private _validateAtlasUri(uri: string): void {
    if (!uri || uri.length <= 0) {
      throw new Error("Invalid Atlas connection string.");
    }
  }

  /**
   * Validates the client that should be created in the constructor
   * @param client Client
   */
  private _validateClient(client: TClient): void {
    if (!client) {
      throw new Error("Client not connected.");
    }
  }

  /**
   * Validates planet data
   * @param data Data to validate
   */
  private _validatePlanetData(data: TPlanetDataArray | undefined) {
    if (!data) {
      throw new Error("Data is undefined.");
    }

    if (data.length <= 0) {
      throw new Error("Couldn't grab planet data.");
    }
  }

  /**
   * Closes the open Atlas connection that is associated with the client
   * @async
   */
  private async _closeAtlasConnection(): Promise<void> {
    return this._client ? await this._client.close() : undefined;
  }
}
