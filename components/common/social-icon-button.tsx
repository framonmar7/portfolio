import Link from "next/link"
import type { ReactNode } from "react"

type SocialIconButtonProps = {
  href: string
  icon: ReactNode
  label: string
  className?: string
}

export function SocialIconButton({ href, icon, label, className = "" }: SocialIconButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-muted-foreground hover:text-primary transition-colors ${className}`}
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
