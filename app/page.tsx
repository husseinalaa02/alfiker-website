"use client"

import { HeroSection } from "@/components/HeroSection"
import Link from "next/link"
import { Network, ShieldCheck } from "lucide-react"

const cards = [
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    title: "Telecom & Technical Solutions",
    desc: "FTTH networks, satellite communications, wireless links, fiber optic maintenance, and enterprise networking infrastructure.",
    icon: Network,
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "Cybersecurity & Software",
    desc: "SIEM/SOC monitoring, endpoint protection, PAM/IAM, DLP, vulnerability management, and 24/7 managed security services.",
    icon: ShieldCheck,
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Services preview */}
      <section className="pt-[110px] pb-[160px] sm:pb-[110px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.015em] text-[#1e2a3a] mb-3">
              What We Offer
            </h2>
            <p className="text-[1.15rem] text-[#6b7c99] max-w-[560px] mx-auto">
              Advanced telecom, cybersecurity, training, and hardware solutions — trusted since 2007 in Iraq.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-[18px] overflow-hidden border border-[rgba(37,99,168,0.1)] shadow-[0_2px_16px_rgba(37,99,168,0.06)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_24px_56px_rgba(37,99,168,0.14)] hover:border-[rgba(37,99,168,0.18)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="p-7">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[rgba(37,99,168,0.09)] mb-3.5">
                      <Icon size={18} className="text-[#2563a8]" />
                    </div>
                    <h3 className="text-[1.35rem] font-bold text-[#1e2a3a] mb-2.5">{card.title}</h3>
                    <p className="text-[0.95rem] text-[#6b7c99] leading-[1.65]">{card.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block cursor-pointer text-white px-9 py-4 rounded-full text-base font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2563a8, #005bb5)",
                boxShadow: "0 4px 20px rgba(0,113,227,0.35)",
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
