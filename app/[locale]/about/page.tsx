import { getTranslations } from "next-intl/server"
import { PartnerLogoCard } from "@/components/PartnerLogoCard"

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "about" })

  const values = [t("v1"), t("v2"), t("v3"), t("v4"), t("v5"), t("v6")]
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

  return (
    <>
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
          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.02em] text-white">{t("title")}</h1>
          <p className="text-white/50 mt-3 text-[1.1rem]">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-[110px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[80px] items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Modern Office Space"
                className="w-full h-auto rounded-[18px] shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>
            <div>
              <h3 className="text-[2rem] font-bold text-[#1e2a3a] mb-[18px]">{t("partnerTitle")}</h3>
              <p className="text-[#6b7c99] mb-[18px] text-[1.05rem] leading-[1.75]">{t("p1")}</p>
              <p className="text-[#6b7c99] mb-[28px] text-[1.05rem] leading-[1.75]">{t("p2")}</p>
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

      <section className="py-[90px] bg-white">
        <div className="max-w-6xl mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 rounded-[18px] bg-[#f4f6fb] border border-[rgba(37,99,168,0.1)]">
              <h3 className="text-[1.5rem] font-bold text-[#1e2a3a] mb-4">{t("visionTitle")}</h3>
              <p className="text-[#6b7c99] leading-[1.75] text-[1rem]">{t("vision")}</p>
            </div>
            <div className="p-8 rounded-[18px] bg-[#f4f6fb] border border-[rgba(37,99,168,0.1)]">
              <h3 className="text-[1.5rem] font-bold text-[#1e2a3a] mb-4">{t("missionTitle")}</h3>
              <p className="text-[#6b7c99] leading-[1.75] text-[1rem]">{t("mission")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto px-7 text-center">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#1e2a3a] mb-3">{t("partnersTitle")}</h2>
          <p className="text-[#6b7c99] mb-10 text-[1.05rem]">{t("partnersSubtitle")}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-2">
            {partners.map((p) => (
              <PartnerLogoCard key={p.name} name={p.name} logo={p.logo} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
