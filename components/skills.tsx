import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Brain, Wrench, Users, Globe, MapPin } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    {
      category: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Prisma", "PostgreSQL", "MySQL", "Server Actions", "API Development"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "AI & ML",
      skills: ["OpenAI API", "Google Vision API", "AI Integration", "Prompt Engineering"],
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "Postman", "Figma"],
      icon: Wrench,
      color: "from-orange-500 to-amber-500",
    },
  ]

  const personalSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Leadership",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Project Management",
  ]

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Fluent" },
  ]

  const experience = [
    {
      title: "Event Presenter and Organizer",
      organization: "Management and Science University",
      location: "Shah Alam, Malaysia",
      date: "27 February 2025",
      description:
        "Organized 'Entry to Computer Science' event explaining how to be a computer science student for 10 high school batches. Delivered an engaging scene performance illustrating the real-life journey and challenges of Computer Science students. Represented the department in honoring participants and encouraging student involvement through an interactive presentation. Built confidence and leadership while hosting and managing the ceremony.",
    },
    {
      title: "Warehouse Associate",
      organization: "The Lost Food Project",
      location: "Kuala Lumpur, Malaysia",
      date: "16 May 2024",
      description:
        "Contributed to warehouse efforts in Kuala Lumpur, actively participating in sorting, packing, and transporting surplus food from markets to those in need. Effective teamwork was essential to success in rescuing and distributing food. Improved problem-solving and adaptability in dynamic volunteering environment.",
    },
    {
      title: "Humanitarian Aid Volunteer",
      organization: "Syria Care Malaysia & MSU Cares Club",
      location: "Shah Alam, Malaysia",
      date: "24 October 2024",
      description:
        "Participated in the Warm Their Winter humanitarian initiative to support Syrian families affected by the crisis. Assisted in sorting, preparing, and packing donated clothes for distribution to those in need. Worked collaboratively with volunteers from Syria Care Malaysia and MSU Cares Club to ensure efficient and organized donation handling. Enhanced organizational and time management skills through sorting and packing operations.",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-purple-50/30 via-pink-50/30 to-background dark:from-purple-950/30 dark:via-pink-950/30 dark:to-background"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive overview of my technical expertise and professional experience
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((category) => {
                const Icon = category.icon
                return (
                  <Card key={category.category} className="border-2 hover:shadow-lg transition-all hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Personal Skills</h3>
            </div>
            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {personalSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-sm border-green-500 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {languages.map((lang) => (
                <Card
                  key={lang.language}
                  className="border-2 border-indigo-200 dark:border-indigo-800 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold text-lg">{lang.language}</p>
                    <Badge variant="secondary" className="mt-2">
                      {lang.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Volunteer Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3 mb-3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-muted-foreground">{exp.organization}</p>
                        </div>
                        <Badge variant="outline" className="w-fit border-blue-500 text-blue-700 dark:text-blue-400">
                          {exp.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
