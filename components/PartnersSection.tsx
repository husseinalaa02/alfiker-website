"use client"

import { useState } from "react"

const partners = [
  { name: "Cisco",     logo: "https://cdn.simpleicons.org/cisco/049fd9" },
  { name: "MikroTik",  logo: "https://cdn.simpleicons.org/mikrotik/293239" },
  { name: "Ubiquiti",  logo: "https://cdn.simpleicons.org/ubiquiti/0559C9" },
  { name: "HP",        logo: "https://cdn.simpleicons.org/hp/0096D6" },
  { name: "Dell",      logo: "https://cdn.simpleicons.org/dell/007DB8" },
  { name: "Hikvision", logo: "/logos/hikvision.svg" },
  { name: "Fortinet",  logo: "https://cdn.simpleicons.org/fortinet/EE3124" },
  { name: "Dahua",     logo: "/logos/dahua.png" },
  { name: "FLIR",      logo: "/logos/flir.png" },
  { name: "ISC2",      logo: "/logos/isc2.png" },
  { name: "Corning",   logo: "/logos/corning.jpg" },
  { name: "Zain",      logo: "/logos/zain.png" },
]

const track = [...partners, ...partners]

function PartnerLogo({ name, logo }: { name: string; logo: string | null }) {
  const [failed, setFailed] = useState(false)
  const initial = name[0].toUpperCase()

  if (!logo || failed) {
    return (
      <div className="w-10 h-10 rounded-full bg-[rgba(37,99,168,0.12)] flex items-center justify-center">
        <span className="text-[1.1rem] font-bold text-[#2563a8]">{initial}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      onError={() => setFailed(true)}
      className="h-9 w-auto max-w-[80px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  )
}


interface PartnersSectionProps {
  title: string
  subtitle: string
}

export function PartnersSection({ title, subtitle }: PartnersSectionProps) {
  return (
    <section className="py-[70px] bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-7 text-center mb-10">
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-[#1e2a3a] mb-2">{title}</h2>
        <p className="text-[#6b7c99] text-[1rem]">{subtitle}</p>
      </div>

      <div className="relative" dir="ltr">
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="flex partners-marquee">
          {track.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2.5 bg-[#f4f6fb] border border-[rgba(37,99,168,0.1)] rounded-[14px] px-7 py-5 w-[140px] mr-6"
            >
              <PartnerLogo name={p.name} logo={p.logo} />
              <span className="text-[0.68rem] font-semibold text-[#6b7c99] tracking-wide uppercase">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
