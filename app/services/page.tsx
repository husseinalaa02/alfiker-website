import type { Metadata } from "next"
import { ServicesGrid } from "@/components/ServicesGrid"

export const metadata: Metadata = {
  title: "Services - AFAQ ALFIKER",
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07070f 0%, #0c1a2e 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,113,227,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,227,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-6xl mx-auto px-7 relative z-10">
          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.02em] text-white">
            Our Services
          </h1>
          <p className="text-white/50 mt-3 text-[1.1rem]">
            Comprehensive solutions across the full telecom spectrum
          </p>
        </div>
      </section>

      {/* Services grid with GlowingEffect */}
      <section className="py-[110px] bg-background">
        <div className="max-w-6xl mx-auto px-7">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.015em] text-foreground mb-3">
              Elite Solutions Portfolio
            </h2>
            <p className="text-[1.15rem] text-muted-foreground max-w-[560px] mx-auto">
              From Radio Planning to International Gateways, we cover the spectrum.
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>
    </>
  )
}
