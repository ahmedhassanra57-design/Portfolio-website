import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dedicated to building innovative solutions with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-sm text-muted-foreground">Bachelor of Computer Science</p>
                    <p className="text-sm text-muted-foreground">Management and Science University (MSU)</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Feb 2023 - Feb 2026
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-sm text-muted-foreground">Shah Alam, Selangor, Malaysia</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Open to remote opportunities and collaborations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-xl">Background</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-pretty leading-relaxed">
                  I am a dedicated and proactive Computer Science undergraduate at Management and Science University
                  (MSU), with a strong foundation in software development, systems architecture, and applied artificial
                  intelligence. Driven by a passion for crafting innovative, user-centric applications powered by AI, I
                  bring hands-on experience in full-stack development using modern technologies.
                </p>
                <p className="text-pretty leading-relaxed">
                  My expertise spans Next.js, React, TypeScript, and AI technologies, enabling me to develop
                  comprehensive solutions ranging from personal finance management systems to AI-powered applications. I
                  am particularly fascinated by the convergence of web development and artificial intelligence,
                  continuously exploring innovative approaches to enhance user experiences through intelligent systems.
                </p>
                <p className="text-pretty leading-relaxed">
                  Beyond technical pursuits, I actively contribute to community initiatives and leadership roles,
                  believing in the power of collaboration and continuous learning to deliver cutting-edge solutions that
                  make a meaningful impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
