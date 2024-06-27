//http:localhost:3000/api/users
//GET and POST APIs

import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

connectDb();

//Function for GET request
// Get the UsersList
export async function GET() {
  let users = [];
  try {
    users = await User.find().select("-password"); //-password = password field hidden
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to fetch Users!",
      success: false,
    });
  }
  return NextResponse.json(users);
}

//Function for POST request
// Create a User
export async function POST(request) {
  //fetching the user details from request
  const { name, email, password, about, profileURL } = await request.json();

  console.log({ name, email, password, about, profileURL }); //Creating the user obj with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  try {
    //password
    user.password = bcrypt.hash(user.password);
    const createdUser = await user.save(); //save to db

    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "User Creation Failed!",
      status: false,
    });
  }
  //const body = request.body;
  //console.log(body);
  //console.log(request.nextUrl.pathname);
  //console.log(request.nextUrl.searchParams);
  //const jsonData = await request.json();
  //console.log(jsonData); // cna destructure and use this data
  //return NextResponse.json({ message: "User data posted successfully",});
}
