import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - AFAQ ALFIKER",
}

const projects = [
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    title: "Fiber Optic — 1,750 km",
    desc: "Open-cut fiber optic cable laying and splicing across 1,750 km for major telecom operators including Earthlink, Zain, and Asiacell.",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    title: "Micro-Trench — 400 km",
    desc: "Fiber optic infrastructure deployment using micro-trenching technology across 400 km of urban terrain.",
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    title: "FTTH — Karbala, Najaf, Babylon & Basra",
    desc: "Fiber-to-the-home projects across four Iraqi governorates using micro-trench and directional boring techniques, including main source connection and full commissioning.",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    title: "Wireless Network — Karbala & Kirkuk",
    desc: "Design and deployment of wireless internet network covering all districts and sub-districts of Karbala Governorate and part of Kirkuk.",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    title: "Al-Hussein Teaching Hospital",
    desc: "Full ICT infrastructure deployment for Al-Hussein Teaching Hospital, including structured cabling, networking, and technical support systems.",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    title: "Crystal Hotels Group",
    desc: "Enterprise network and IT infrastructure setup for Crystal Hotels Group, delivering reliable connectivity and security across all hotel branches.",
  },
]

export default function ProjectsPage() {
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
            Our Portfolio
          </h1>
          <p className="text-white/50 mt-3 text-[1.1rem]">
            Global implementations built on precision and trust
          </p>
        </div>
      </section>

      {/* Projects gallery */}
      <section className="py-[110px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.015em] text-[#1e2a3a] mb-3">
              Successful Implementations
            </h2>
            <p className="text-[1.15rem] text-[#6b7c99] max-w-[560px] mx-auto">
              Real projects delivered across Iraq for telecom operators, hospitals, hotels, and government entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="relative rounded-[18px] overflow-hidden cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)] group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[380px] object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 flex items-end p-9 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, rgba(5,10,30,0.9) 0%, transparent 55%)" }}
                >
                  <div>
                    <h3 className="text-white text-[1.6rem] font-bold mb-1.5 translate-y-[18px] group-hover:translate-y-0 transition-transform duration-400">
                      {p.title}
                    </h3>
                    <p className="text-white/75 text-[0.9rem]">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
