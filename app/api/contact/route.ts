import { NextRequest, NextResponse } from "next/server"

// ── In-memory rate limiter ────────────────────────────────────────────────────
// Simple per-IP counter. Resets every WINDOW_MS milliseconds.
// Note: on serverless each instance has its own map; for stricter limits
// upgrade to Upstash Redis with @upstash/ratelimit.
const WINDOW_MS = 60_000  // 1 minute
const MAX_REQUESTS = 5    // max 5 submissions per IP per window

const ipMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipMap.get(ip)
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= MAX_REQUESTS) return true
  entry.count++
  return false
}

// ── Validation ────────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{2,}$/

function validate(name: unknown, email: unknown, message: unknown) {
  const errors: Record<string, string> = {}
  if (typeof name !== "string" || name.trim().length === 0)
    errors.name = "Name is required"
  else if (name.trim().length > 100)
    errors.name = "Name must be 100 characters or fewer"

  if (typeof email !== "string" || email.trim().length === 0)
    errors.email = "Email is required"
  else if (!EMAIL_RE.test(email.trim()))
    errors.email = "Enter a valid email address"
  else if (email.length > 254)
    errors.email = "Email is too long"

  if (typeof message !== "string" || message.trim().length === 0)
    errors.message = "Message is required"
  else if (message.trim().length > 2000)
    errors.message = "Message must be 2000 characters or fewer"

  return errors
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before trying again." },
      { status: 429 }
    )
  }

  // Parse body
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, message } = body as Record<string, unknown>

  // Server-side validation
  const errors = validate(name, email, message)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  // ── Email delivery ──────────────────────────────────────────────────────────
  // TODO: integrate a transactional email service (e.g. Resend, SendGrid).
  // Example with Resend:
  //   import { Resend } from "resend"
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: "noreply@al-fiker.com",
  //     to:   "info@al-fiker.com",
  //     subject: `Message from ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  //   })
  // ───────────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true }, { status: 200 })
}
