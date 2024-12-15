import { model, Schema } from "mongoose";

const fileSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: false,
    },
    receiver: {
      type: String,
      required: false,
    },
    password: String,
    expiryDate:Date
  },
  { timestamps: true }
);

export const File = model("File", fileSchema);
