import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { NavBarWrapper } from "@/components/NavBarWrapper"
import Link from "next/link"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Linkedin, Facebook, Instagram } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AFAQ ALFIKER | Global Telecom Solutions",
  description: "Top-tier, customer-centric partner for global and local communication via satellite and fiber optics.",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound()
  }

  const messages = await getMessages()
  const isArabic = locale === "ar"
  // For Arabic, use Almarai font-family (loaded via CSS @import in globals.css)
  const bodyStyle = isArabic ? { fontFamily: "'Almarai', sans-serif" } : undefined

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={inter.className} style={bodyStyle} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <NavBarWrapper />
          <main className="pb-24 sm:pb-0">{children}</main>

          {/* Footer */}
          <footer className="border-t border-white/5 pt-16 pb-8" style={{ background: "#07070f" }}>
            <div className="max-w-6xl mx-auto px-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-12">
                <div>
                  <span className="animated-shiny-text text-[1.6rem] block mb-2.5 whitespace-nowrap">
                    {isArabic ? "آفاق الفكر" : "AFAQ ALFIKER"}
                  </span>
                  <p className="text-sm text-white/40">
                    {isArabic
                      ? "خدمات الاتصالات والبرمجيات. نربط العالم من خلال الابتكار والدقة."
                      : "Telecom and Software Services. Connecting the world through innovation and precision."}
                  </p>
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white/90 mb-4">
                    {isArabic ? "التنقل" : "Navigation"}
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {isArabic ? (
                      <>
                        {[
                          ["من نحن", `/${locale}/about`],
                          ["الخدمات", `/${locale}/services`],
                          ["المشاريع", `/${locale}/projects`],
                          ["اتصل بنا", `/${locale}/contact`],
                        ].map(([label, href]) => (
                          <Link
                            key={href}
                            href={href}
                            className="text-[0.88rem] text-white/45 hover:text-white/85 transition-colors"
                          >
                            {label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <>
                        {[
                          ["About Us", `/${locale}/about`],
                          ["Services", `/${locale}/services`],
                          ["Projects", `/${locale}/projects`],
                          ["Contact", `/${locale}/contact`],
                        ].map(([label, href]) => (
                          <Link
                            key={href}
                            href={href}
                            className="text-[0.88rem] text-white/45 hover:text-white/85 transition-colors"
                          >
                            {label}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white/90 mb-4">
                    {isArabic ? "التواصل" : "Contact"}
                  </h4>
                  <a
                    href="tel:+9647701009005"
                    dir="ltr"
                    className="text-[0.88rem] text-white/45 hover:text-white/85 transition-colors block mb-4"
                  >
                    +964 770 100 9005
                  </a>
                  {/* Social media icons */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/al-fiker-horizons/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-white/40 hover:text-white/85 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://www.facebook.com/alfiker.horizons?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-white/40 hover:text-white/85 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/alfiker.karbala?igsh=MTNhMTVpZzFqZGd1aA%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-white/40 hover:text-white/85 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@alfiker_karbala2025?_r=1&_t=ZS-94d0JlvlGio"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="text-white/40 hover:text-white/85 transition-colors"
                    >
                      {/* TikTok SVG icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.07] pt-6 text-center">
                <p className="text-[0.78rem] text-white/30">
                  {isArabic ? "© 2026 آفاق الفكر. جميع الحقوق محفوظة." : "© 2026 AFAQ ALFIKER. All Rights Reserved."}
                </p>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
