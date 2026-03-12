import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const { token, next } = body as Record<string, unknown>

  if (typeof token !== "string" || !token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 })
  }

  // Verify token with Cloudflare
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.CF_TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      }),
    }
  )

  const result = await verifyRes.json()

  if (!result.success) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 })
  }

  // Redirect target — only allow relative paths to prevent open-redirect
  const redirectTo =
    typeof next === "string" && next.startsWith("/") ? next : "/"

  const response = NextResponse.json({ redirect: redirectTo })
  response.cookies.set("site_verified", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  })
  return response
}
