import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Wanchai Lungnoeng",
    studentId: "660610793",
  });
};
