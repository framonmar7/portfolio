"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Project } from "@/data/projects"

type ProjectLinksProps = {
  project: Project
  variant?: "featured" | "modal"
}

export function ProjectLinks({ project, variant = "featured" }: ProjectLinksProps) {
  const { t } = useLanguage()

  if (variant === "modal") {
    return (
      <div className="flex gap-2">
        <Button asChild size="sm" className="flex-1">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 mr-1" />
            {t("projects.code")}
          </Link>
        </Button>
        {project.liveUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" />
              {t("projects.liveDemo")}
            </Link>
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <Button asChild size="sm">
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="w-4 h-4 mr-2" />
          {t("projects.code")}
        </Link>
      </Button>
      {project.liveUrl && (
        <Button asChild variant="outline" size="sm">
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            {t("projects.liveDemo")}
          </Link>
        </Button>
      )}
    </div>
  )
}
