import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

await connectDb();
export async function POST(request) {
  const { email, password } = await request.json();

  try {
    //GET user
    const user = await User.findOne({
      email: email,
    });
    if (user == null) {
      throw new Error("User Not Found!");
    }

    //pwd checking
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password Not Matched!");
    }

    //Token Generation - JWT
    const token = jwt.sign(
      //sign function
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    //iv. make nxtresp - cookie
    const response = NextResponse.json({
      message: "Login Successful!",
      success: true,
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log(user);
    console.log(token);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        succes: false,
      },
      {
        status: 404,
      }
    );
  }
}
