//GET ALL TASKS; POST A TASK API
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { getResponseMsg } from "@/helper/responseMsg";

connectDb();

//Function for GET all the tasks
//Get the Tasklist
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMsg("Failed to get the Data!", 404, false); //another way to give response as json msg, helper
  }
}

//Function for create a new task
export async function POST(request) {
  const { title, content, userId } = await request.json();

  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return getResponseMsg("Failed to create the Task!", 500, false);
  }
}
