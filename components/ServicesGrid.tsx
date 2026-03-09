"use client"

import { Wifi, Globe, Cpu, Radio } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Wifi className="h-4 w-4" />,
    title: "Internet Services",
    description:
      "High-speed, reliable connectivity solutions for businesses requiring uninterrupted global access.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/7]",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    title: "Int. Gateway Solutions",
    description:
      "Seamless international gateway services connecting your business across borders with zero compromise.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/13]",
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    title: "IT Solutions",
    description:
      "Comprehensive software and infrastructure support to digitize and optimize your entire workflow.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/7]",
  },
  {
    icon: <Radio className="h-4 w-4" />,
    title: "Radio Planning",
    description:
      "Expert planning and optimization to ensure maximum network coverage and operational efficiency.",
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
