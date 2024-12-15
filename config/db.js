import mongoose from "mongoose";

import { app } from "./../server.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://kshitijsharma1221:kshitijanupam12@cluster0.ob7isiq.mongodb.net/fileSharing`
    );
    app.on("ERROR", (error) => {
      console.log("ERROR", error);
    });
    console.log({ DatabaseConnected: true });
    console.log({ DatabaseHost: connectionInstance.connection.host });

    mongoose.connection.on("error", (error) => {
      console.log(
        "Connection is made but having trouble talking to the database",
        { error }
      );
    });
  } catch (error) {
    console.log("Some error connecting to the database", error);
    process.exit(1);
  }
};
