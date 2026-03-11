"use client"

import { useState } from "react"
import { X, MapPin, User, Layers, Cpu } from "lucide-react"

type Project = {
  img: string
  title: string
  desc: string
  details: string
  client: string
  location: string
  scope: string
  tech: string
}

type Labels = {
  clientLabel: string
  locationLabel: string
  scopeLabel: string
  techLabel: string
  close: string
  clickHint: string
}

export default function ProjectsGrid({ projects, labels }: { projects: Project[]; labels: Labels }) {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <p className="text-center text-[0.9rem] text-[#6b7c99] mb-10 -mt-6 italic">{labels.clickHint}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={() => setSelected(p)}
            className="relative rounded-[18px] overflow-hidden cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)] group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-[380px] object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
            />
            <div
              className="absolute inset-0 flex items-end p-9 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: "linear-gradient(to top, rgba(5,10,30,0.9) 0%, transparent 55%)" }}
            >
              <div>
                <h3 className="text-white text-[1.6rem] font-bold mb-1.5 translate-y-[18px] group-hover:translate-y-0 transition-transform duration-400">
                  {p.title}
                </h3>
                <p className="text-white/75 text-[0.9rem]">{p.desc}</p>
                <span className="inline-block mt-3 text-[0.8rem] text-white/60 border border-white/30 rounded-full px-3 py-0.5">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative z-10 bg-white rounded-[20px] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-56 rounded-t-[20px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(5,10,30,0.75) 0%, transparent 60%)" }}
              />
              <h2 className="absolute bottom-5 left-6 text-white text-[1.5rem] font-bold leading-tight pr-12">
                {selected.title}
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 transition-colors"
                aria-label={labels.close}
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-7">
              <p className="text-[#3a4a5e] text-[1rem] leading-relaxed mb-6">{selected.details}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoRow icon={<User className="w-4 h-4" />} label={labels.clientLabel} value={selected.client} />
                <InfoRow icon={<MapPin className="w-4 h-4" />} label={labels.locationLabel} value={selected.location} />
                <InfoRow icon={<Layers className="w-4 h-4" />} label={labels.scopeLabel} value={selected.scope} />
                <InfoRow icon={<Cpu className="w-4 h-4" />} label={labels.techLabel} value={selected.tech} />
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-7 w-full py-3 rounded-[10px] text-white font-semibold text-[0.95rem] transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #1a56db 0%, #2563a8 100%)" }}
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#f4f6fb] rounded-[12px] p-4">
      <div className="flex items-center gap-1.5 text-[#2563a8] mb-1">
        {icon}
        <span className="text-[0.75rem] font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-[#1e2a3a] text-[0.9rem] leading-snug">{value}</p>
    </div>
  )
}
