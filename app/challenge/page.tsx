"use client"

import { useEffect, useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Script from "next/script"

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void
  }
}

function ChallengeContent() {
  const searchParams = useSearchParams()
  const next = searchParams.get("next") || "/"
  const verifying = useRef(false)

  useEffect(() => {
    window.onTurnstileSuccess = async (token: string) => {
      if (verifying.current) return
      verifying.current = true

      const res = await fetch("/api/verify-challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, next }),
      })

      if (res.ok) {
        const { redirect } = await res.json()
        window.location.href = redirect
      } else {
        verifying.current = false
        // Reload to show a fresh widget on failure
        window.location.reload()
      }
    }
  }, [next])

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div
        style={{
          minHeight: "100vh",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#fff",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: 520, width: "100%", textAlign: "left" }}>
          <h1 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "0.4rem" }}>
            Performing security verification
          </h1>
          <p style={{ color: "#aaa", fontSize: "0.92rem", marginBottom: "1.8rem", lineHeight: 1.5 }}>
            This website uses a security service to protect against malicious bots.
            This page is displayed while the website verifies you are not a bot.
          </p>

          <div
            className="cf-turnstile"
            data-sitekey={process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY}
            data-callback="onTurnstileSuccess"
            data-theme="dark"
          />
        </div>

        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: "1px solid #222",
            padding: "12px 20px",
            fontSize: "0.8rem",
            color: "#666",
            textAlign: "center",
          }}
        >
          Performance and Security by{" "}
          <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f6821f" }}>
            Cloudflare
          </a>
          {" | "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
            Privacy
          </a>
        </div>
      </div>
    </>
  )
}

export default function ChallengePage() {
  return (
    <Suspense>
      <ChallengeContent />
    </Suspense>
  )
}
