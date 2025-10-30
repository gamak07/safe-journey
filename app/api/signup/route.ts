import { NextResponse } from "next/server";
import { safeJson } from "../../../lib/safeJson";

const BACKEND = process.env.BACKEND_URL || "https://safejourney-gzrs.onrender.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, phone, password, conPassword } = body;

    // Basic server-side validation
    if (!fullname || !email || !phone || !password || !conPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (password !== conPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    const backendPayload = {
      fullname,
      phonenumber: phone,        // backend expects phonenumber
      email,
      password,
      passwordConfirm: conPassword, // backend expects passwordConfirm
    };

    const backendRes = await fetch(`${BACKEND}/api/v1/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(backendPayload),
    });

    const result = await safeJson(backendRes);

    if (!backendRes.ok) {
      const msg = result?.message || result?.error || result?.text || "Signup failed";
      return NextResponse.json({ error: msg }, { status: backendRes.status });
    }

    // Return success payload as-is
    return NextResponse.json(result, { status: backendRes.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
