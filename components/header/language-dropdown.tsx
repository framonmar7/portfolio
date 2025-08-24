"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { languages } from "@/config/languages"
import { Globe, ChevronDown } from "lucide-react"

export function LanguageDropdown() {
  const { language, setLanguage, t } = useLanguage()
  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <Globe className="w-4 h-4" />
          <span className="flex items-center gap-2">
            <span>{currentLanguage?.flag}</span>
            <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
            <span className="sm:hidden">{currentLanguage?.code.toUpperCase()}</span>
          </span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 cursor-pointer ${language === lang.code ? "bg-accent" : ""}`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="flex-1">{lang.nativeName}</span>
            {language === lang.code && <div className="w-2 h-2 bg-primary rounded-full" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
