import { SocialButton } from "@/components/common/social-button"
import { socialLinks } from "@/config/social-links"

export function HeroButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {socialLinks.map((social) => (
        <SocialButton key={social.id} href={social.href} icon={social.icon} label={social.label} />
      ))}
    </div>
  )
}
