import { FooterMessage } from "./footer-message"
import { FooterContact } from "./footer-contact"
import { FooterSocial } from "./footer-social"
import { FooterCopyright } from "./footer-copyright"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <FooterMessage />
          <FooterContact />
        </div>
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  )
}
