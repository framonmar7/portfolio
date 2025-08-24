"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { ViewAllButton } from "./view-all-button"
import { ProjectsModal } from "./projects-modal"
import { projects } from "@/data/projects"

export function ProjectsList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const featuredProjects = projects.slice(0, 4)

  return (
    <>
      <div className="space-y-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} variant="featured" />
        ))}
      </div>
      <ViewAllButton onClick={() => setIsModalOpen(true)} />
      <ProjectsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
