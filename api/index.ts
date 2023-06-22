import express from "express";
import { setupRestEndpoint } from "./src/server";
import * as http from "http";
import { PORT } from "./src/shared/core/config";
import { connectToDB } from "./src/shared/core/database";

const startServer = () => {
  const app = express();
  const server: http.Server = http.createServer(app);
  setupRestEndpoint(app);
  app.listen(PORT!!, async () => {
    await connectToDB();
    console.log(`[server]: running to ${PORT}`);
  });
};

void (() => {
  startServer();
})();
