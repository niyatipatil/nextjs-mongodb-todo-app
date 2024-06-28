//return logged in user
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";
import jwt from "jsonwebtoken";

export async function GET(request) {
  await connectDb();
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const user = await User.findById(data.id).select("-password");

  //console.log("testing here!");
  return NextResponse.json(user);
}
