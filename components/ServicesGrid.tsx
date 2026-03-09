"use client"

import { Network, ShieldCheck, GraduationCap, Monitor } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Network className="h-4 w-4" />,
    title: "Telecom & Technical Solutions",
    description:
      "FTTH network design & deployment, satellite communications, P2P & P2MP wireless links, fiber optic maintenance (OTDR, splicing), structured cabling, and enterprise networking using Cisco, HPE Aruba, Dell & more.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/7]",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Cybersecurity & Software",
    description:
      "End-to-end cybersecurity: SIEM/XDR/SOC monitoring, PAM/IAM, DLP & data classification, EDR endpoint protection, vulnerability management, threat intelligence, dark web monitoring, GRC, and secure email gateways.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/13]",
  },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Training & Certifications",
    description:
      "Professional training in partnership with ISC2, ISACA, EC-Council, PECB, BSI, CompTIA, and CertNexus. Programs cover cybersecurity, networking, governance, and advanced technology — online, in-person & corporate.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/7]",
  },
  {
    icon: <Monitor className="h-4 w-4" />,
    title: "Hardware Supply",
    description:
      "Full range of IT hardware: desktops, laptops, servers, storage systems, monitors, printers, UPS systems, GPUs, RAM, SSDs, motherboards, cooling systems, and complete data center setup & migration services.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/7/3/13]",
  },
]

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  area: string
}

const ServiceCard = ({ icon, title, description, area }: ServiceCardProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex h-full flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 text-foreground">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export function ServicesGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </ul>
  )
}
