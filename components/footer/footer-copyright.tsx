"use client"

import { useLanguage } from "@/contexts/language-context"

export function FooterCopyright() {
  const { t } = useLanguage()

  return (
    <div className="text-center pt-6 border-t border-border/50">
      <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
    </div>
  )
}
