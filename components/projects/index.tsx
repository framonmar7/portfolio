import { ProjectsHeader } from "./projects-header"
import { ProjectsList } from "./projects-list"

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <ProjectsHeader />
        <ProjectsList />
      </div>
    </section>
  )
}
