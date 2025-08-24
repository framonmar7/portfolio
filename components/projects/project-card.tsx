import { Card } from "@/components/ui/card"
import { ProjectImage } from "./project-image"
import { ProjectContent } from "./project-content"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  index?: number
  variant?: "featured" | "modal"
}

export function ProjectCard({ project, index = 0, variant = "featured" }: ProjectCardProps) {
  const isReversed = variant === "featured" && index % 2 === 1

  if (variant === "modal") {
    return (
      <Card className="overflow-hidden">
        <ProjectImage project={project} isReversed={false} variant="modal" />
        <ProjectContent project={project} isReversed={false} variant="modal" />
      </Card>
    )
  }

  return (
    <Card key={project.id} className="overflow-hidden">
      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
        <ProjectImage project={project} isReversed={isReversed} variant="featured" />
        <ProjectContent project={project} isReversed={isReversed} variant="featured" />
      </div>
    </Card>
  )
}
