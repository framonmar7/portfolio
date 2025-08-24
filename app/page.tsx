"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero"
import { ProjectsSection } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}
