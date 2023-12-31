import { CreateWantedPosterInput } from "../../shared/types/models";
import { WantedPosterModel } from "../models/wantedPoster.model";

const createWantedPosterService = async (input: CreateWantedPosterInput) => {
  return await WantedPosterModel.create(input);
};

const deleteWantedPosterService = async (_id: any) => {
  return await WantedPosterModel.deleteOne({ _id });
};

const getOneWantedPosterService = async (_id: any) => {
  return await WantedPosterModel.findOne({ _id });
};

const getAllWantedPosterService = async (_id: any, populate: any) => {
  return await WantedPosterModel.find({ user: _id }).populate(populate);
};

const findWantedPosterService = async () => {
  return await WantedPosterModel.find();
};

const updateWantedPosterService = async (id: any, data: any) => {
  if (data !== null) {
    await WantedPosterModel.findOneAndUpdate({ _id: id }, data);
  }
  return await WantedPosterModel.findOne({ _id: id });
};

export default {
  createWantedPosterService,
  deleteWantedPosterService,
  getOneWantedPosterService,
  getAllWantedPosterService,
  findWantedPosterService,
  updateWantedPosterService,
};
