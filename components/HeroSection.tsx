"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ConnectivityVisual } from "./ConnectivityVisual"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const spotlight = spotlightRef.current
    if (!hero || !spotlight) return

    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        spotlight.style.setProperty("--sx", `${e.clientX - rect.left}px`)
        spotlight.style.setProperty("--sy", `${e.clientY - rect.top}px`)
      })
    }

    hero.addEventListener("mousemove", handleMouseMove)
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #07070f 0%, #0c1a2e 100%)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,113,227,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,227,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-[10%] left-[30%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,113,227,0.12) 0%, transparent 70%)" }}
      />

      {/* Cursor spotlight */}
      <div ref={spotlightRef} className="hero-spotlight" />

      {/* Logo watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://z-cdn-media.chatglm.cn/files/1605812b-fba0-4c1d-b402-b94cfd86fb82.png?auth_key=1871489473-6b05af61da6a40ce927122f1df0bc258-0-281de65fa117e26f652be6cc461983f7"
        alt=""
        className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-[40%] max-w-[560px] opacity-[0.03] z-[1] pointer-events-none"
        style={{ filter: "grayscale(100%) invert(1)" }}
      />

      <div className="max-w-6xl mx-auto px-7 relative z-[2] flex items-center w-full min-h-screen pt-24 pb-16 flex-col md:flex-row gap-0">
        {/* Left: text */}
        <div className="flex-1 min-w-0 text-left md:pr-10">
          <div
            className="inline-flex items-center gap-2 text-[#5ba4cf] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(0,113,227,0.15)", border: "1px solid rgba(0,113,227,0.3)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#5ba4cf]"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            Global Telecom &amp; IT Partner
          </div>

          <div className="mb-5">
            <span className="animated-shiny-text text-[clamp(2.6rem,7vw,6rem)] whitespace-nowrap">AFAQ ALFIKER</span>
          </div>

          <h1 className="text-[clamp(1.7rem,3vw,2.8rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white/90 mb-5">
            Connecting Horizons.<br />Empowering Business.
          </h1>

          <p className="text-[clamp(0.95rem,1.6vw,1.15rem)] text-white/50 mb-9 font-normal leading-[1.7] max-w-[500px]">
            Your top-tier, customer-centric partner for global and local communication via satellite and fiber optics. Reliable connectivity that scales with your ambitions.
          </p>

          <Link
            href="/services"
            className="inline-block text-white px-9 py-4 rounded-full text-base font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #2563a8, #005bb5)",
              boxShadow: "0 4px 20px rgba(0,113,227,0.35)",
            }}
          >
            Explore Solutions
          </Link>

          <div className="flex gap-10 mt-[52px] pt-8 border-t border-white/[0.08] flex-wrap">
            {[
              { num: "500+", label: "km Fiber Deployed" },
              { num: "99.9%", label: "Uptime SLA" },
              { num: "50+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <span className="text-[1.7rem] font-bold text-white block">{stat.num}</span>
                <span className="text-xs text-white/40 uppercase tracking-widest mt-0.5 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Connectivity visualization */}
        <div className="flex-1 min-w-0 w-full md:h-[580px] mt-4 md:mt-0">
          <ConnectivityVisual />
        </div>
      </div>
    </section>
  )
}
