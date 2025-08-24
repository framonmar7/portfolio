"use client"

import { LanguageDropdown } from "./language-dropdown"

export function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex-1" />
      <LanguageDropdown />
    </header>
  )
}
