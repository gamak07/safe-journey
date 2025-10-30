import { NextResponse } from "next/server";
import { safeJson } from "../../../lib/safeJson";

const BACKEND =
  process.env.BACKEND_URL || "https://safejourney-gzrs.onrender.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { identifier, password } = body;

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Identifier and password required" },
        { status: 400 },
      );
    }

    // Map identifier to backend expected field. If your backend expects email/phone specifically,
    // you may need to detect and send the right field. Here we send `{ email: identifier }`.
    const backendRes = await fetch(`${BACKEND}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: identifier, password }),
    });

    const result = await safeJson(backendRes);
    // console.log(result)
    console.log("Backend login result:", result);

    if (!backendRes.ok) {
      const msg =
        result?.message || result?.error || result?.text || "Login failed";
      return NextResponse.json({ error: msg }, { status: backendRes.status });
    }

    // Assume backend returns token in result.token (adjust if needed)
    // Try common alternatives if you don't know exact shape:
    const token =
      result?.token ||
      result?.jwt ||
      result?.data?.token ||
      result?.accessToken;

    const response = NextResponse.json(
      { success: true, user: result },
      { status: 200 },
    );

    if (token) {
      // Set HttpOnly cookie (secure in prod)
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    } else {
      return NextResponse.json(
        { error: "Token not provided by backend" },
        { status: 500 },
      );
    }

    return response;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
