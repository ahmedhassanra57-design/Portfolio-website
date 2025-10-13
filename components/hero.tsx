import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container px-4 py-20 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center md:text-left order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex justify-center md:justify-start mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ahmed Hassan Ramadan
                </h1>
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack Developer & AI Enthusiast
                </p>
              </div>

              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                Passionate about creating innovative, user-centric applications powered by artificial intelligence.
                Skilled in building scalable applications with modern UI frameworks.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 bg-transparent"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600"
                >
                  <Link href="https://github.com/ahmedhassanra57-design" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600"
                >
                  <Link
                    href="https://www.linkedin.com/in/ahmed-hassan-58582a331/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600"
                >
                  <Link href="#contact">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-13%20at%2009.10.15_6954582c-3rvD4O793ydoqcYh0XcWeuOc3ZuAxt.jpg"
                    alt="Ahmed Hassan Ramadan"
                    width={400}
                    height={500}
                    className="object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
