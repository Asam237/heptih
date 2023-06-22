import { Request, Response } from "express";
import { UserModel } from "../domain/models/user.model";
import wantedPosterService from "../domain/services/wantedPoster.service";
import { CreateWantedPosterInput } from "../shared/types/models";

const createWantedPosterController = async (req: Request, res: Response) => {
  const { description, phone, title }: CreateWantedPosterInput = req.body;
  const user = await UserModel.findById({ _id: req.body.wantedPoster });
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

export { createWantedPosterController };
