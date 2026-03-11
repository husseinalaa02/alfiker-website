"use client"

import { useState } from "react"

export function PartnerLogoCard({ name, logo }: { name: string; logo: string | null }) {
  const [failed, setFailed] = useState(false)
  const initial = name[0].toUpperCase()

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[14px] border border-[rgba(37,99,168,0.1)] shadow-sm px-4 py-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {logo && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={name}
          onError={() => setFailed(true)}
          className="h-8 w-auto max-w-[80px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-[rgba(37,99,168,0.12)] flex items-center justify-center">
          <span className="text-[1rem] font-bold text-[#2563a8]">{initial}</span>
        </div>
      )}
      <span className="text-[0.72rem] font-semibold text-[#6b7c99] tracking-wide uppercase">{name}</span>
    </div>
  )
}
