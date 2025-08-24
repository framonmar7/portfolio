"use client"

import { useLanguage } from "@/contexts/language-context"

export function FooterMessage() {
  const { t } = useLanguage()

  return (
    <div>
      <p className="text-lg mb-4">{t("footer.message")}</p>
    </div>
  )
}
