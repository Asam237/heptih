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
  commentaire: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const WantedPosterModel = mongoose.model("WantedPoster", wantedPosterSchema);
const WantedPosterUpdateParams: string[] = [
  "title",
  "description",
  "phone",
  "find",
  "date",
  "commentaire",
  "city",
];

export { WantedPosterModel, WantedPosterUpdateParams };
