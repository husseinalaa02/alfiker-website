import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - AFAQ ALFIKER",
}

const values = [
  "Global Reach via Satellite Technology",
  "Reliable Fiber Optic Networks",
  "Expert IT & Software Support",
  "24/7 Customer Service",
]

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="text-white/50 mt-3 text-[1.1rem]">The story behind AFAQ ALFIKER</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-[110px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[80px] items-center">
            {/* Image */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Modern Office Space"
                className="w-full h-auto rounded-[18px] shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[2rem] font-bold text-[#1e2a3a] mb-[18px]">
                Your Partner in Connectivity
              </h3>
              <p className="text-[#6b7c99] mb-[18px] text-[1.05rem] leading-[1.75]">
                AFAQ ALFIKER is a leading provider of Telecom and Software Services. We specialize
                in delivering top-tier communication solutions via satellite and fiber optics, built
                on a foundation of reliability and innovation.
              </p>
              <p className="text-[#6b7c99] mb-[28px] text-[1.05rem] leading-[1.75]">
                Our customer-centric approach ensures that whether you need local connectivity or
                global reach, we have the expertise and infrastructure to keep you connected —
                anywhere, anytime.
              </p>

              <ul className="space-y-3.5">
                {values.map((v) => (
                  <li key={v} className="flex items-center gap-3.5 font-medium text-[0.95rem] text-[#1e2a3a]">
                    <span className="text-[#2563a8] text-[1.1rem]">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
