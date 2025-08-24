"use client"

import { useLanguage } from "@/contexts/language-context"

export function HeroHeading() {
  const { t } = useLanguage()

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
      {t("hero.greeting")} <span className="text-primary">Francisco Montero</span>
    </h1>
  )
}
