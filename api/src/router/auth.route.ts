import * as authController from "../controllers/auth.controller";

import { Router } from "express";
const AuthRoute = () => {
  const router = Router();
  const prefix: string = "/auth";
  router.post(`${prefix}/create`, authController.registerController);
  router.post(`${prefix}/login`, authController.loginController);
  return router;
};

export { AuthRoute };
