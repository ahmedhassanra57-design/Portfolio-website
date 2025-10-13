import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Code2, Bot, Scan, Brain, Shield, Palette, Database } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "MASARI-AI",
      description:
        "MasariAI Finance is a modern personal finance manager built with Next.js. Track income, expenses, and budgets; upload and OCR receipts; and generate rich reports and charts. An AI assistant delivers budgeting tips and spending insight through an intelligent AI chatbot powered by Llama. Set savings goals, get smart notifications, and manage securely with NextAuth and Prisma.",
      features: [
        {
          icon: Bot,
          text: "AI chatbot powered by Llama for trend analysis and natural language Q&A using OpenAI and Groq SDK",
        },
        {
          icon: Scan,
          text: "Integrated OCR to extract receipt data automatically using Tesseract.js and Google Vision API",
        },
        {
          icon: Brain,
          text: "Intelligent expense tracking with personalized financial insights and AI-powered recommendations",
        },
        {
          icon: Shield,
          text: "Secure authentication with NextAuth (Google OAuth and JWT)",
        },
        {
          icon: Palette,
          text: "Modular architecture with clean UI using Tailwind CSS and shadcn/ui",
        },
        {
          icon: Database,
          text: "Scalable backend using Prisma and PostgreSQL with flexible integration support",
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "OpenAI API",
        "Groq SDK",
        "Llama",
        "Tesseract.js",
        "Google Vision API",
        "NextAuth",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      github: "https://github.com/ahmedhassanra57-design/MASARI-AI",
      live: null,
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Project
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Showcasing expertise in full-stack development and AI integration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                          <Code2 className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-pretty text-base leading-relaxed pt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400">Key Features</h4>
                    <div className="grid gap-3">
                      {project.features.map((feature, idx) => {
                        const Icon = feature.icon
                        return (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-md shrink-0 mt-0.5">
                              <Icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-purple-500 text-purple-700 dark:text-purple-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.github && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 bg-transparent"
            >
              <Link href="https://github.com/ahmedhassanra57-design" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
