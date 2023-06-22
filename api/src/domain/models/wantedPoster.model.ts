import mongoose from "mongoose";

const wantedPosterSchema: mongoose.Schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  find: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const WantedPosterModel = mongoose.model("WantedPoster", wantedPosterSchema);
const WantedPosterUpdateParams: string[] = [
  "title",
  "description",
  "phone",
  "find",
];

export { WantedPosterModel, WantedPosterUpdateParams };
