"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate inputs
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: true,
      message: "All fields are required.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: true,
      message: "Please enter a valid email address.",
    }
  }

  const fromEmail = process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>"
  const toEmail = process.env.RESEND_TO || "ahmedhassan.ramdn@gmail.com"

  try {
    console.log("[v0] Attempting to send email...")
    console.log("[v0] From:", fromEmail)
    console.log("[v0] To:", toEmail)
    console.log("[v0] API Key exists:", !!process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email, // Visitor's email for easy reply
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("[v0] Email sent successfully:", result)

    return {
      success: true,
      error: false,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    console.error("[v0] Error details:", JSON.stringify(error, null, 2))

    return {
      success: false,
      error: true,
      message: "Something went wrong. Please try again later or email me directly at ahmedhassan.ramdn@gmail.com",
    }
  }
}
