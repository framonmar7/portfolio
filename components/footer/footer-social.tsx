import { SocialIconButton } from "@/components/common/social-icon-button"
import { socialLinks } from "@/config/social-links"
import { cloneElement } from "react"

export function FooterSocial() {
  return (
    <div className="flex justify-center gap-6 mb-6">
      {socialLinks.map((social) => (
        <SocialIconButton
          key={social.id}
          href={social.href}
          icon={cloneElement(social.icon, { className: "w-6 h-6" })}
          label={social.label}
        />
      ))}
    </div>
  )
}
