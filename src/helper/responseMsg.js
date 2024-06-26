import { NextResponse } from "next/server";

export const getResponseMsg = (msgText, statusCode, successStatus) => {
  return NextResponse.json(
    {
      message: msgText,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};
