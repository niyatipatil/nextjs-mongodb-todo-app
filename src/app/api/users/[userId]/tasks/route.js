//get the tasks of a particular user
//api/users/[userId]/tasks

import { getResponseMsg } from "@/helper/responseMsg";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const tasks = await Task.find({
      userId: userId,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return getResponseMsg("Failed to get the Tasks!", 404, false);
  }
}
