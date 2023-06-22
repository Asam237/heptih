import { Router } from "express";
import * as wantedPosterController from "../controllers/wantedPoster.controller";
import { verifyToken } from "../utils/verifyToken";

const WantedPosterRoute = () => {
  const router = Router();
  const prefix: string = "/wanted-poster";
  router.post(`${prefix}`, wantedPosterController.createWantedPosterController);
  router.get(
    `${prefix}`,
    verifyToken,
    wantedPosterController.getWantedPosterController
  );
  router.get(
    `${prefix}/all`,
    verifyToken,
    wantedPosterController.findWantedPosterController
  );
  return router;
};

export { WantedPosterRoute };
