import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { NextRequest, NextResponse } from "next/server"

const intlMiddleware = createMiddleware(routing)

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip challenge for the challenge page itself and API routes
  const isExempt =
    pathname === "/challenge" ||
    pathname.startsWith("/api/")

  if (!isExempt) {
    const verified = req.cookies.get("site_verified")?.value === "1"
    if (!verified) {
      const url = req.nextUrl.clone()
      url.pathname = "/challenge"
      url.search = `?next=${encodeURIComponent(pathname + req.nextUrl.search)}`
      return NextResponse.redirect(url)
    }
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
