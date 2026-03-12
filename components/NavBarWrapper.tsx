"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Globe, ChevronDown, Network, ShieldCheck, GraduationCap, Monitor, Radio, Waves, Building2, Wifi, Menu, X } from "lucide-react"

export function NavBarWrapper() {
  const t  = useTranslations("nav")
  const ts = useTranslations("services")
  const tp = useTranslations("projects")
  const params   = useParams()
  const pathname = usePathname()
  const router   = useRouter()
  const locale   = (params.locale as string) || "en"
  const isArabic = locale === "ar"

  const [scrolled,     setScrolled]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) setProjectsOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  function toggleLocale() {
    const newLocale = locale === "en" ? "ar" : "en"
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`))
  }

  const serviceItems = [
    { name: ts("telecomTitle"),   url: `/${locale}/services`, icon: Network },
    { name: ts("cyberTitle"),     url: `/${locale}/services`, icon: ShieldCheck },
    { name: ts("trainingTitle"),  url: `/${locale}/services`, icon: GraduationCap },
    { name: ts("hardwareTitle"),  url: `/${locale}/services`, icon: Monitor },
  ]

  const projectItems = [
    { name: tp("p1title"), url: `/${locale}/projects`, icon: Waves },
    { name: tp("p2title"), url: `/${locale}/projects`, icon: Waves },
    { name: tp("p3title"), url: `/${locale}/projects`, icon: Radio },
    { name: tp("p4title"), url: `/${locale}/projects`, icon: Wifi },
    { name: tp("p5title"), url: `/${locale}/projects`, icon: Building2 },
    { name: tp("p6title"), url: `/${locale}/projects`, icon: Building2 },
  ]

  const linkColor  = (active: boolean) => active ? "#1d1d1f" : "rgba(0,0,0,0.52)"
  const hoverOn    = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.color = "#1d1d1f" }
  const hoverOff   = (e: React.MouseEvent<HTMLElement>, active: boolean) => {
    (e.currentTarget as HTMLElement).style.color = linkColor(active)
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.88)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex-shrink-0 hover:opacity-75 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/afaq_logo.png" alt="AFAQ ALFIKER" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">

          {/* Home */}
          {[{ name: t("home"), url: `/${locale}` }, { name: t("about"), url: `/${locale}/about` }].map(item => {
            const active = pathname === item.url
            return (
              <Link
                key={item.url}
                href={item.url}
                className="relative px-4 py-1.5 text-[0.82rem] font-medium rounded-full transition-colors"
                style={{ color: linkColor(active) }}
                onMouseEnter={hoverOn}
                onMouseLeave={e => hoverOff(e, active)}
              >
                {item.name}
                {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-black/40" />}
              </Link>
            )
          })}

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href={`/${locale}/services`}
              className="flex items-center gap-1 px-4 py-1.5 text-[0.82rem] font-medium rounded-full transition-colors"
              style={{ color: linkColor(pathname.startsWith(`/${locale}/services`)) }}
              onMouseEnter={hoverOn}
              onMouseLeave={e => hoverOff(e, pathname.startsWith(`/${locale}/services`))}
            >
              {t("services")}
              <ChevronDown size={13} className="transition-transform duration-200" style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </Link>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/[0.06] overflow-hidden"
                style={{ backgroundColor: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
              >
                <div className="p-2">
                  {serviceItems.map(item => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.04] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[rgba(37,99,168,0.08)] flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-[#2563a8]" />
                        </div>
                        <span className="text-[0.8rem] font-medium text-[#1d1d1f] leading-snug">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Projects dropdown */}
          <div
            ref={projectsRef}
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <Link
              href={`/${locale}/projects`}
              className="flex items-center gap-1 px-4 py-1.5 text-[0.82rem] font-medium rounded-full transition-colors"
              style={{ color: linkColor(pathname.startsWith(`/${locale}/projects`)) }}
              onMouseEnter={hoverOn}
              onMouseLeave={e => hoverOff(e, pathname.startsWith(`/${locale}/projects`))}
            >
              {t("projects")}
              <ChevronDown size={13} className="transition-transform duration-200" style={{ transform: projectsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </Link>

            {projectsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/[0.06] overflow-hidden"
                style={{ backgroundColor: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
              >
                <div className="p-2">
                  {projectItems.map(item => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        onClick={() => setProjectsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.04] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[rgba(37,99,168,0.08)] flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-[#2563a8]" />
                        </div>
                        <span className="text-[0.8rem] font-medium text-[#1d1d1f] leading-snug">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          {(() => {
            const active = pathname === `/${locale}/contact`
            return (
              <Link
                href={`/${locale}/contact`}
                className="relative px-4 py-1.5 text-[0.82rem] font-medium rounded-full transition-colors"
                style={{ color: linkColor(active) }}
                onMouseEnter={hoverOn}
                onMouseLeave={e => hoverOff(e, active)}
              >
                {t("contact")}
                {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-black/40" />}
              </Link>
            )
          })()}
        </nav>

        {/* Language + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            aria-label="Switch language"
            className="flex items-center gap-1.5 transition-colors"
            style={{ color: "rgba(0,0,0,0.5)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#1d1d1f")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.5)")}
          >
            <Globe size={14} />
            <span className="text-[0.82rem] font-medium">{isArabic ? "EN" : "عربي"}</span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-colors hover:bg-black/[0.05]"
            style={{ color: "#1d1d1f" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "rgba(255,255,255,0.98)" }}
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {[
              { name: t("home"),     url: `/${locale}` },
              { name: t("about"),    url: `/${locale}/about` },
              { name: t("services"), url: `/${locale}/services` },
              { name: t("projects"), url: `/${locale}/projects` },
              { name: t("contact"),  url: `/${locale}/contact` },
            ].map(item => {
              const active = pathname === item.url || (item.url !== `/${locale}` && pathname.startsWith(item.url))
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-[0.92rem] font-medium transition-colors"
                  style={{
                    color: active ? "#1d1d1f" : "rgba(0,0,0,0.55)",
                    backgroundColor: active ? "rgba(0,0,0,0.04)" : "transparent",
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
