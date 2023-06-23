import { NextFunction, Request, Response } from "express";
import { UserModel } from "../domain/models/user.model";
import { WantedPosterUpdateParams } from "../domain/models/wantedPoster.model";
import wantedPosterService from "../domain/services/wantedPoster.service";
import { CreateWantedPosterInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createWantedPosterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    description,
    phone,
    title,
    find,
    date,
    commentaire,
    city,
  }: CreateWantedPosterInput = req.body;
  const user = await UserModel.findById({ _id: req.body.user });
  const createWantedPoster =
    await wantedPosterService.createWantedPosterService({
      description,
      phone,
      title,
      find,
      user,
      date,
      commentaire,
      city,
    });
  await user?.save();
  await createWantedPoster.save();
  res.status(200).json({ wantedPoster: createWantedPoster });
  next();
};

const getWantedPosterController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const wantedPosters = await wantedPosterService.getAllWantedPosterService(
    req?.user?.id,
    "user"
  );
  res.status(200).json({ wantedPosters });
  next();
};
const findWantedPosterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const wantedPosters = await wantedPosterService.findWantedPosterService();
  res.status(200).json({ wantedPosters });
  next();
};

const updateWantedPosterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const data = parseRequest(req.body, WantedPosterUpdateParams);
  const updateWanted = await wantedPosterService.updateWantedPosterService(
    id,
    data
  );
  res.json(updateWanted);
  next();
};

export {
  createWantedPosterController,
  getWantedPosterController,
  findWantedPosterController,
  updateWantedPosterController,
};
