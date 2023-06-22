import express, { Application } from "express";
import { AuthRoute } from "./router/auth.route";
import { WantedPosterRoute } from "./router/wantedPoster.route";
import cors from "cors";
import * as bodyParser from "body-parser";

export const setupRestEndpoint = (app: Application) => {
  const router = express.Router();
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/", router);
  app.use("/", AuthRoute());
  app.use("/", WantedPosterRoute());
};
