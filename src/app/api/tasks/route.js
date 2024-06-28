//GET ALL TASKS; POST A TASK API
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { getResponseMsg } from "@/helper/responseMsg";
import jwt from "jsonwebtoken";

//Function for GET all the tasks
//Get the Tasklist
export async function GET(request) {
  try {
    await connectDb();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMsg("Failed to get the Data!", 404, false); //another way to give response as json msg, helper
  }
}

//Function to create a new task
export async function POST(request) {
  const { title, content, userId, status } = await request.json();
  //logged in user ID fetched here
  const authToken = request.cookies.get("authToken")?.value;
  console.log({ authToken });
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log({ data });
  console.log(data.id);

  try {
    const task = new Task({
      title,
      content,
      userId: data.id,
      status,
    });

    await connectDb();
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    //console.log(error);
    console.error("Error creating task:", error.message);
    return getResponseMsg("Failed to create the Task!", 500, false);
  }
}
