import type { Language } from "@/contexts/language-context"

export type LanguageConfig = {
  code: Language
  name: string
  nativeName: string
  flag: string
}

export const languages: LanguageConfig[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
  },
]
