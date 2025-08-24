"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail } from "lucide-react"

export function FooterContact() {
  const { t } = useLanguage()

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h3>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-3 text-primary" />
          <span>
            <strong>{t("footer.email")}:</strong> framonmar7@gmail.com
          </span>
        </li>
      </ul>
    </div>
  )
}
