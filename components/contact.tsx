"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "@/app/actions/contact"
import { useActionState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link
                        href="mailto:ahmedhassan.ramdn@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        ahmedhassan.ramdn@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Shah Alam, Selangor, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <Link
                        href="https://www.linkedin.com/in/ahmed-hassan-58582a331/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        ahmed-hassan-58582a331
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Github className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <Link
                        href="https://github.com/ahmedhassanra57-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        ahmedhassanra57-design
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required disabled={isPending} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required disabled={isPending} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      disabled={isPending}
                    />
                  </div>

                  {state?.success && (
                    <Alert>
                      <AlertDescription className="text-green-600 dark:text-green-400">
                        {state.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  {state?.error && (
                    <Alert variant="destructive">
                      <AlertDescription>{state.message}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
