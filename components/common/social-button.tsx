import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

type SocialButtonProps = {
  href: string
  icon: ReactNode
  label: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function SocialButton({ href, icon, label, variant = "outline" }: SocialButtonProps) {
  return (
    <Button variant={variant} asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        {label}
      </Link>
    </Button>
  )
}
