import { ProfileImage } from "./profile-image"
import { HeroHeading } from "./hero-heading"
import { HeroDescription } from "./hero-description"
import { HeroButtons } from "./hero-buttons"

export function HeroSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <ProfileImage />
        <HeroHeading />
        <HeroDescription />
        <HeroButtons />
      </div>
    </section>
  )
}
