import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email is Required!"],
  },
  password: {
    type: String,
    required: [true, "Password is Required!"],
  },
  about: String,
  profileURL: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
