import { MongoClient } from "mongodb";
import logger from "../common/logger.ts";
import { logFileNames } from "../enums/logFileNames.ts";

type TClient = MongoClient | undefined;

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

  public async ping(): Promise<void> {
    try {
      this._validateClientConnection(this._client);

      //  connect to Atlas
      await this._client?.connect();

      //  send a ping to confirm Atlas connection
      this._client?.db("admin").command({ ping: 1 });
      await logger(logFileNames.DB, "Ping was successful.");
    } catch (err: any) {
      await logger(logFileNames.DB, err.message);
    } finally {
      this._closeAtlasConnection();
    }
  }

  private _validateAtlasUri(uri: string): void {
    if (!uri || uri.length <= 0) {
      throw new Error("Invalid Atlas connection string.");
    }
  }

  private _validateClientConnection(client: TClient): void {
    if (!client) {
      throw new Error("Client not connected.");
    }
  }

  private async _closeAtlasConnection(): Promise<void> {
    return this._client ? await this._client.close() : undefined;
  }
}
