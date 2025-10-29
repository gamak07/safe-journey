import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { safeJson } from "../../../lib/safeJson";
// import { safeJson } from "@/lib/safeJson";

const BACKEND = process.env.BACKEND_URL || "https://safejourney-gzrs.onrender.com";

export async function GET(req: Request) {
  try {
    // Read token from cookie store
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const backendRes = await fetch(`${BACKEND}/api/v1/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // backend expects `JWT <token>` (per your curl)
      },
      cache: 'no-store'
    });

    const result = await safeJson(backendRes);
    console.log(result)

    if (!backendRes.ok) {
      const msg = result?.message || result?.error || result?.text || "Failed to fetch user";
      return NextResponse.json({ error: msg }, { status: backendRes.status });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
