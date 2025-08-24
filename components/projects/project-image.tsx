"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import type { Project } from "@/data/projects"

type ProjectImageProps = {
  project: Project
  isReversed: boolean
  variant?: "featured" | "modal"
}

export function ProjectImage({ project, isReversed, variant = "featured" }: ProjectImageProps) {
  const { t } = useLanguage()

  if (variant === "modal") {
    return (
      <div className="relative h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={t(project.titleKey)}
          fill
          className="object-contain bg-muted/10"
        />
      </div>
    )
  }

  return (
    <div className={`relative ${isReversed ? "lg:col-start-2" : ""}`}>
      <Image
        src={project.image || "/placeholder.svg"}
        alt={t(project.titleKey)}
        width={500}
        height={300}
        className="w-full h-64 lg:h-full object-contain bg-muted/10"
      />
    </div>
  )
}
