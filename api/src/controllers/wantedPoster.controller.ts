import { Request, Response } from "express";
import { UserModel } from "../domain/models/user.model";
import wantedPosterService from "../domain/services/wantedPoster.service";
import { CreateWantedPosterInput } from "../shared/types/models";

const createWantedPosterController = async (req: Request, res: Response) => {
  const { description, phone, title }: CreateWantedPosterInput = req.body;
  const user = await UserModel.findById({ _id: req.body.user });
  const createWantedPoster =
    await wantedPosterService.createWantedPosterService({
      description,
      phone,
      title,
      user,
    });
  await user?.save();
  await createWantedPoster.save();
  return res.status(200).json({ wantedPoster: createWantedPoster });
};

const getWantedPosterController = async (req: any, res: Response) => {
  const wantedPosters = await wantedPosterService.getAllWantedPosterService(
    req?.user?.id,
    "user"
  );
  return res.status(200).json({ wantedPosters });
};
const findWantedPosterController = async (req: Request, res: Response) => {
  const wantedPosters = await wantedPosterService.findWantedPosterService();
  return res.status(200).json({ wantedPosters });
};

export {
  createWantedPosterController,
  getWantedPosterController,
  findWantedPosterController,
};
