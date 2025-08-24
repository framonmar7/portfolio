"use client"

import { useLanguage } from "@/contexts/language-context"

export function HeroDescription() {
  const { t } = useLanguage()

  return <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{t("hero.description")}</p>
}
