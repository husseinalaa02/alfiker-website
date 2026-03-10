import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NavBarWrapper } from "@/components/NavBarWrapper"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "AFAQ ALFIKER | Global Telecom Solutions",
  description:
    "Top-tier, customer-centric partner for global and local communication via satellite and fiber optics.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarWrapper />
        <main className="pb-24 sm:pb-0">{children}</main>

        {/* Footer */}
        <footer
          className="border-t border-white/5 pt-16 pb-8 sm:pb-8 pb-28"
          style={{ background: "#07070f" }}
        >
          <div className="max-w-6xl mx-auto px-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-12">
              <div>
                <span className="animated-shiny-text text-[1.6rem] block mb-2.5 whitespace-nowrap">
                  AFAQ ALFIKER
                </span>
                <p className="text-sm text-white/40">
                  Telecom and Software Services. Connecting the world through innovation and precision.
                </p>
              </div>

              <div>
                <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white/90 mb-4">
                  Navigation
                </h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    ["About Us", "/about"],
                    ["Services", "/services"],
                    ["Projects", "/projects"],
                    ["Contact", "/contact"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-[0.88rem] text-white/45 hover:text-white/85 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white/90 mb-4">
                  Contact
                </h4>
                <a
                  href="https://www.al-fiker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.88rem] text-white/45 hover:text-white/85 transition-colors"
                >
                  www.al-fiker.com
                </a>
              </div>
            </div>

            <div className="border-t border-white/[0.07] pt-6 text-center">
              <p className="text-[0.78rem] text-white/30">
                &copy; 2026 AFAQ ALFIKER. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
