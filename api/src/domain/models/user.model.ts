import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    enum: ["ADMIN", "METIER"],
    default: "METIER",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  wantedPoster: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WantedPoster",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
const UserUpdateParams: string[] = ["fullname"];

export { UserModel, UserUpdateParams };
