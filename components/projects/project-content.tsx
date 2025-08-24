"use client"

import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { ProjectTechnologies } from "./project-technologies"
import { ProjectLinks } from "./project-links"
import type { Project } from "@/data/projects"

type ProjectContentProps = {
  project: Project
  isReversed: boolean
  variant?: "featured" | "modal"
}

export function ProjectContent({ project, isReversed, variant = "featured" }: ProjectContentProps) {
  const { t } = useLanguage()

  if (variant === "modal") {
    return (
      <div className="p-4">
        <CardHeader className="p-0 mb-3">
          <CardTitle className="text-lg mb-2">{t(project.titleKey)}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">{t(project.descriptionKey)}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ProjectTechnologies technologies={project.technologies} variant="modal" />
          <ProjectLinks project={project} variant="modal" />
        </CardContent>
      </div>
    )
  }

  return (
    <div className={`p-6 lg:p-8 flex flex-col justify-center ${isReversed ? "lg:col-start-1" : ""}`}>
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-2xl mb-2">{t(project.titleKey)}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{t(project.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ProjectTechnologies technologies={project.technologies} variant="featured" />
        <ProjectLinks project={project} variant="featured" />
      </CardContent>
    </div>
  )
}
