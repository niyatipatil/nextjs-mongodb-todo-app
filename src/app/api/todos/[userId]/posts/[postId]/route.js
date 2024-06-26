//Dynamic Routes
//http://localhost:3000/api/todos/45/posts/250

import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userId, postId } = params;
  console.log("user Id : ", userId);
  console.log("post Id : ", postId);
  return NextResponse.json(params);
}
