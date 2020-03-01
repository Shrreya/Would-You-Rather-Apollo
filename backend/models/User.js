import { Schema, model } from "mongoose"

const userModel = new Schema(
  {
    username: {
      type: String,
      unique: true,
      index: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const User = model("user", userModel)

export default User
