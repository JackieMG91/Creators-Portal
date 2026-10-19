import { NextResponse } from "next/server";

// Anyone can see these (the (website) group)
const PUBLIC_PAGES = ["/", "/about", "/services", "/pricing", "/roadmap", "/contact", "/faq", "/privacy", "/terms"];
const PUBLIC_PREFIXES = ["/blog"];

// Logged-out only (the (onboarding) group)
const AUTH_PAGES = ["/login", "/signup"];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const hasSession = Boolean(request.cookies.get("session")?.value);
  const devBypass =
    process.env.DEV_AUTH_BYPASS === "true" &&
    process.env.NODE_ENV !== "production";

  const isAuthPage = AUTH_PAGES.includes(pathname);
  const isPublic =
    PUBLIC_PAGES.includes(pathname) ||
    PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  // Logged in: skip the landing and login pages, go to the app
  if (hasSession) {
    if (isAuthPage || pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // Logged out: public and login pages load, everything else goes to the landing page
  if (isAuthPage || isPublic || devBypass) return NextResponse.next();
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};