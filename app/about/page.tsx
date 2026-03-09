import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - AFAQ ALFIKER",
}

const values = [
  "Integrated & Reliable Telecommunications Solutions",
  "Advanced Digital Infrastructure Development",
  "Cybersecurity & Data Protection Services",
  "Professional Training with International Certifications",
  "24/7 Technical Support & Managed Services",
  "Sustainable Solutions Supporting Digital Transformation",
]

const vision = "To become a trusted regional leader in telecommunications and digital infrastructure solutions by delivering high-quality services aligned with the latest international standards, empowering communities and businesses through advanced technologies that accelerate digital transformation and promote sustainable development."

const mission = "At AFAQ ALFIKER COMPANY, we strive to deliver advanced telecommunications and IT solutions that contribute to building strong and secure digital infrastructure capable of meeting present demands and future challenges. We are committed to providing high-quality services driven by innovation and operational excellence, while continuously developing our team to ensure the delivery of the best technical solutions."

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

      {/* Company Overview */}
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
                AFAQ ALFIKER COMPANY was established in 2007 in Holy Karbala, Iraq, by a
                distinguished group of highly qualified and experienced engineers specializing in
                telecommunications and information technology.
              </p>
              <p className="text-[#6b7c99] mb-[28px] text-[1.05rem] leading-[1.75]">
                Since its inception, the company has set a strategic objective to deliver integrated
                and reliable communication solutions, and to contribute to building advanced
                infrastructure that keeps pace with the rapid technological evolution in
                telecommunications and internet sectors.
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

      {/* Vision & Mission */}
      <section className="py-[90px] bg-white">
        <div className="max-w-6xl mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 rounded-[18px] bg-[#f4f6fb] border border-[rgba(37,99,168,0.1)]">
              <h3 className="text-[1.5rem] font-bold text-[#1e2a3a] mb-4">Our Vision</h3>
              <p className="text-[#6b7c99] leading-[1.75] text-[1rem]">{vision}</p>
            </div>
            <div className="p-8 rounded-[18px] bg-[#f4f6fb] border border-[rgba(37,99,168,0.1)]">
              <h3 className="text-[1.5rem] font-bold text-[#1e2a3a] mb-4">Our Mission</h3>
              <p className="text-[#6b7c99] leading-[1.75] text-[1rem]">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-[90px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7 text-center">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#1e2a3a] mb-3">Our Partners</h2>
          <p className="text-[#6b7c99] mb-10 text-[1.05rem]">Trusted global brands we work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Earthlink", "Zain", "Asiacell", "HP", "Dell", "MikroTik", "Hikvision", "Dahua", "Cisco", "ISC2", "FLIR"].map((p) => (
              <span
                key={p}
                className="px-5 py-2.5 bg-white rounded-full border border-[rgba(37,99,168,0.15)] text-[#1e2a3a] font-medium text-[0.9rem] shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
