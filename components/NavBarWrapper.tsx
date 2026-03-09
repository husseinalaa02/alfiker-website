"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Layers, Briefcase, Mail } from "lucide-react"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Services", url: "/services", icon: Layers },
  { name: "Projects", url: "/projects", icon: Briefcase },
  { name: "Contact", url: "/contact", icon: Mail },
]

export function NavBarWrapper() {
  return <NavBar items={navItems} />
}
