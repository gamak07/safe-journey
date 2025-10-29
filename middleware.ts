// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Get the token from the request cookies
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // 2. Define your protected routes (routes that require a token)
  const protectedRoutes = ["/overview"];

  // 3. Define routes that a logged-in user should NOT see
  const publicOnlyRoutes = ["/login", "/signup"];

  // 4. Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // 5. Check if the current path is a "public-only" route
  const isPublicOnlyRoute = publicOnlyRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // --- Logic ---

  // A) If user is NOT logged in and tries to access a protected route
  if (!token && isProtectedRoute) {
    // Redirect them to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // B) If user IS logged in and tries to access login/signup
  if (token && isPublicOnlyRoute) {
    // Redirect them to the overview page
    return NextResponse.redirect(new URL("/overview", request.url));
  }

  // 6. If none of the above, let the request continue
  return NextResponse.next();
}

// 7. Matcher: This tells the middleware which routes to run on.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};