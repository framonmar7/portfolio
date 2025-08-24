import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"

type ProjectTechnologiesProps = {
  technologies: Project["technologies"]
  variant?: "featured" | "modal"
}

export function ProjectTechnologies({ technologies, variant = "featured" }: ProjectTechnologiesProps) {
  if (variant === "modal") {
    return (
      <div className="flex flex-wrap gap-1 mb-4">
        {technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
        {technologies.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{technologies.length - 3}
          </Badge>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {technologies.map((tech) => (
        <Badge key={tech} variant="secondary">
          {tech}
        </Badge>
      ))}
    </div>
  )
}
