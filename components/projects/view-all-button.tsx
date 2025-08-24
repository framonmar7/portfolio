"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

type ViewAllButtonProps = {
  onClick: () => void
}

export function ViewAllButton({ onClick }: ViewAllButtonProps) {
  const { t } = useLanguage()

  return (
    <div className="text-center mt-12">
      <Button onClick={onClick} variant="outline" size="lg">
        {t("projects.viewAll")}
      </Button>
    </div>
  )
}
