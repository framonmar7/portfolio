import Image from "next/image"

export function ProfileImage() {
  return (
    <div className="mb-8">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-6 border-4 border-primary/10"
      />
    </div>
  )
}
