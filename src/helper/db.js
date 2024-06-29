import mongoose from "mongoose";
import { User } from "../models/user";

export const connectDb = async () => {
  try {
    //console.log("MongoDB URL:", process.env.MONGO_DB_URL);
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "todo_project",
    });
    console.log("Connection to database Successful!");
    console.log("host : ", connection.host);
    //console.log(connection);
  } catch (error) {
    console.log("Connection to database Failed!");
    console.log(error);
  }
};
