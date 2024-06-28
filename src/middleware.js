import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed successfully!");

  const authToken = request.cookies.get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }

  const UserloggedInNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/signup";

  if (UserloggedInNotAccessPath) {
    // user authorized so directing to home
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    // no auth sracc - access denied

    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          { message: "Access is Denied!", success: false },
          {
            status: 404,
          }
        );
      }

      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      // v
    }
  }

  console.log(authToken);
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
