//Dynamic Route
//http://localhost:3000/api/users/[userId]
//Single User GET API, DELETE API

import { NextResponse } from "next/server";
import { User } from "@/models/user";

//Function to get a SINGLE User
export async function GET(request, { params }) {
  const { userId } = params;
  const user = await User.findById(userId);
  return NextResponse.json(user);
}

//Function for DELETE request
// To delete a User
export async function DELETE(request, { params }) {
  const { userId } = params; //destructure
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User Deleted Successfully!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete the User!",
      success: false,
    });
  }
}

//Function for PUT request
//Updating a particular user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update the User!",
      success: false,
    });
  }
}
