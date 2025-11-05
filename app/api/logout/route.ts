import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const BACKEND =
  process.env.BACKEND_URL || "https://safejourney-gzrs.onrender.com";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 },
      );
    }

    const response = await fetch(`${BACKEND}/api/v1/auths/logout`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.message || "Logout failed" }),
        { status: response.status },
      );
    }

    const res = NextResponse.json(data, { status: 200 });
    res.cookies.set({
      name: "token",
      value: "",
      expires: new Date(0),
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong" },
      { status: 500 },
    );
  }
}
