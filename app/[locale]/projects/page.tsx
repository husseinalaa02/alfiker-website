import { getTranslations } from "next-intl/server"
import ProjectsGrid from "@/components/ProjectsGrid"

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "projects" })

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
      title: t("p1title"),
      desc: t("p1desc"),
      details: t("p1details"),
      client: t("p1client"),
      location: t("p1location"),
      scope: t("p1scope"),
      tech: t("p1tech"),
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      title: t("p2title"),
      desc: t("p2desc"),
      details: t("p2details"),
      client: t("p2client"),
      location: t("p2location"),
      scope: t("p2scope"),
      tech: t("p2tech"),
    },
    {
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      title: t("p3title"),
      desc: t("p3desc"),
      details: t("p3details"),
      client: t("p3client"),
      location: t("p3location"),
      scope: t("p3scope"),
      tech: t("p3tech"),
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
      title: t("p4title"),
      desc: t("p4desc"),
      details: t("p4details"),
      client: t("p4client"),
      location: t("p4location"),
      scope: t("p4scope"),
      tech: t("p4tech"),
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      title: t("p5title"),
      desc: t("p5desc"),
      details: t("p5details"),
      client: t("p5client"),
      location: t("p5location"),
      scope: t("p5scope"),
      tech: t("p5tech"),
    },
    {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      title: t("p6title"),
      desc: t("p6desc"),
      details: t("p6details"),
      client: t("p6client"),
      location: t("p6location"),
      scope: t("p6scope"),
      tech: t("p6tech"),
    },
  ]

  const labels = {
    clientLabel: t("clientLabel"),
    locationLabel: t("locationLabel"),
    scopeLabel: t("scopeLabel"),
    techLabel: t("techLabel"),
    close: t("close"),
    clickHint: t("clickHint"),
  }

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
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.015em] text-[#1e2a3a] mb-3">
              {t("sectionTitle")}
            </h2>
            <p className="text-[1.15rem] text-[#6b7c99] max-w-[560px] mx-auto">{t("sectionSubtitle")}</p>
          </div>
          <ProjectsGrid projects={projects} labels={labels} />
        </div>
      </section>
    </>
  )
}
