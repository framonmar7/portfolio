import { Github, Linkedin } from "lucide-react"
import { SiHuggingface } from "react-icons/si"

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/framonmar7",
    icon: <Github className="w-4 h-4 mr-2" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/framonmar7",
    icon: <Linkedin className="w-4 h-4 mr-2" />,
  },
  {
    id: "huggingface",
    label: "Hugging Face",
    href: "https://huggingface.co/framonmar7",
    icon: <SiHuggingface className="w-4 h-4 mr-2" />,
  },
]
