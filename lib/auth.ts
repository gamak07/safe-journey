import { cookies } from "next/headers";
import { safeJson } from "./safeJson"; // Adjust path

const BACKEND = process.env.BACKEND_URL || "https://safejourney-gzrs.onrender.com";

/**
 * This is a server-side function to get the currently authenticated user.
 * It can be used directly in Server Components OR in API Routes.
 */
export async function getAuthenticatedUser() {
  // 1. Read token directly from the cookie store
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  // 2. Fetch the external backend
  const backendRes = await fetch(`${BACKEND}/api/v1/auths/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", // Ensure fresh data for user sessions
  });

  const result = await safeJson(backendRes);

  if (!backendRes.ok) {
    const msg = result?.message || result?.error || result?.text || "Failed to fetch user";
    throw new Error(msg);
  }

  // 3. Return the user data
  return result;
}