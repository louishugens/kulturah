import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  programs: [
    { name: "Language Immersion", href: "#" },
    { name: "Cultural Exchange", href: "#" },
    { name: "Business Communication", href: "#" },
    { name: "Youth Programs", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-[#c5c5c5]/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column - increased logo size */}
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Kulturah" width={220} height={70} className="h-16 w-auto mb-6" />
            <p className="text-[#0a1f44]/60 font-light leading-relaxed mb-6 max-w-sm">
              A Thousand Cultures, One Method. Breaking cultural barriers and bringing the world together through the
              power of language and education.
            </p>
            {/* Social Links - enhanced hover effects */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-[#0a1f44]/5 flex items-center justify-center text-[#0a1f44] hover:bg-[#b8941f] hover:text-white transition-all duration-300 hover-lift"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs - updated gold color */}
          <div>
            <h4 className="text-[#0a1f44] font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#0a1f44]/60 font-light hover:text-[#b8941f] transition-colors underline-animate"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#0a1f44] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#0a1f44]/60 font-light hover:text-[#b8941f] transition-colors underline-animate"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#0a1f44] font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#0a1f44]/60 font-light hover:text-[#b8941f] transition-colors underline-animate"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#c5c5c5]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#0a1f44]/50 text-sm font-light">
            <span className="font-bold">© {new Date().getFullYear()} Kulturah.</span> All rights reserved.
          </p>
          <p className="text-[#0a1f44]/50 text-sm font-light">Dedicated to cultural unity and global education.</p>
        </div>
      </div>
    </footer>
  )
}
