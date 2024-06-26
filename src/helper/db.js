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

    //testing - creating user new
    /*const userr = new User({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      about: "This is only for testing purpose",
    });
    await userr.save();
    console.log("user is created");*/
  } catch (error) {
    console.log("Connection to database Failed!");
    console.log(error);
  }
};
