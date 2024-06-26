//Dynamic Route
//http://localhost:3000/api/tasks/[taskId]
//
import { getResponseMsg } from "@/helper/responseMsg";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//Function to get a SINGLE Task
export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    //Fetch the task from the database
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    return getResponseMsg("Failed to get the Task!", 404, false);
  }
}

//Function for PUT request
//Updating a particular Task
export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, content, status } = await request.json();
  try {
    let task = await Task.findById(taskId); //let - update
    (task.title = title), (task.content = content), (task.status = status);

    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    return getResponseMsg("Failed to update the Task!", 500, false);
  }
}

//Function to DELETE a Task
export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({
      _id: taskId,
    });
    return getResponseMsg("Task deleted successfully!", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMsg("Failed to delete the Task!", 500, false);
  }
}
