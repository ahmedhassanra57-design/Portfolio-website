"use client"

import { Code2, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ahmed Hassan
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating innovative, user-centric applications powered by artificial
              intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-fit"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/ahmedhassanra57-design"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-accent rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-hassan-58582a331/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-accent rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="mailto:ahmedhassan.ramdn@gmail.com"
                className="p-2 bg-muted hover:bg-accent rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Shah Alam, Selangor, Malaysia</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Ahmed Hassan Ramadan. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">Licensed under the MIT License</p>
        </div>
      </div>
    </footer>
  )
}
