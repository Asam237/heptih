import { Router } from "express";
import * as wantedPosterController from "../controllers/wantedPoster.controller";

const WantedPosterRoute = () => {
  const router = Router();
  const prefix: string = "/wanted-poster";
  router.post(`${prefix}`, wantedPosterController.createWantedPosterController);
  return router;
};

export { WantedPosterRoute };
