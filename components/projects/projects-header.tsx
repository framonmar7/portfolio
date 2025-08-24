"use client"

import { useLanguage } from "@/contexts/language-context"

export function ProjectsHeader() {
  const { t } = useLanguage()

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("projects.title")}</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
    </div>
  )
}
