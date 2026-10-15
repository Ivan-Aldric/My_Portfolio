"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Github, Linkedin, Loader2, Mail, Phone, Send, XCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendViaEmailJS = async () => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!publicKey || publicKey === "YOUR_EMAILJS_PUBLIC_KEY") {
      throw new Error("EmailJS not configured")
    }

    const response = await emailjs.send(
      "service_portfolio",
      "template_contact",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Portfolio Contact Form",
        message: formData.message,
        to_name: "Ivan Aldric",
      },
      publicKey,
    )

    if (response.status !== 200) {
      throw new Error("EmailJS failed")
    }

    setSubmitStatus("success")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const sendViaAPI = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Contact Form",
        message: formData.message,
      }),
    })

    if (!response.ok) {
      throw new Error("API failed")
    }

    setSubmitStatus("success")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xqadwnbj"
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Message - ${formData.subject || "Portfolio Contact Form"}`,
          _next: window.location.href,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        await sendViaEmailJS()
      }
    } catch (error) {
      console.error("Formspree error:", error)
      try {
        await sendViaEmailJS()
      } catch (emailjsError) {
        console.error("EmailJS error:", emailjsError)
        try {
          await sendViaAPI()
        } catch (apiError) {
          console.error("API error:", apiError)
          setSubmitStatus("error")
          setTimeout(() => setSubmitStatus("idle"), 5000)
        }
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "aldricivan8@gmail.com",
      href: "mailto:aldricivan8@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+237 657 910 666",
      href: "tel:+237657910666",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/lekeufack-ivan-aldric",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/lekeufack-ivan-aldric",
    },
  ]

  return (
    <section id="contact" className="dark min-h-[calc(100svh-4rem)] bg-[#090a09] px-5 py-20 text-[#f2f2ed] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.header
          className="mb-12 border-b border-white/15 pb-8 sm:mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#c8f169]">Contact</p>
          <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
            Let’s talk<span className="text-[#c8f169]">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Have a project or opportunity in mind? Send me a message and I’ll get back to you.
          </p>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.aside
            className="space-y-8"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/45">Direct contact</h2>
              <div className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[#c8f169]/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-[#c8f169]/25 bg-[#c8f169]/10">
                      <Icon className="h-4 w-4 text-[#c8f169]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/45">{label}</span>
                      <span className="block truncate text-sm text-white/85 transition-colors group-hover:text-[#c8f169]">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/45">Find me online</h2>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/65 transition-colors hover:border-[#c8f169]/50 hover:text-[#c8f169]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="border border-white/10 bg-white/[0.02] p-5 sm:p-8"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-6 text-xl font-semibold text-white">Send a message</h2>

            {submitStatus === "success" && (
              <div role="status" className="mb-5 flex items-center gap-3 border border-[#c8f169]/25 bg-[#c8f169]/10 p-3 text-sm text-[#dfffaa]">
                <CheckCircle className="h-4 w-4 shrink-0 text-[#c8f169]" />
                Message sent. I’ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div role="alert" className="mb-5 flex items-center gap-3 border border-red-400/25 bg-red-400/5 p-3 text-sm text-red-200">
                <XCircle className="h-4 w-4 shrink-0" />
                Couldn’t send your message. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                    Name <span className="text-[#c8f169]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="w-full border border-white/15 bg-black/20 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c8f169]/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    Email <span className="text-[#c8f169]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className="w-full border border-white/15 bg-black/20 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c8f169]/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-white/70">
                  Subject <span className="text-white/35">(optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-white/15 bg-black/20 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c8f169]/60"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                  Message <span className="text-[#c8f169]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full resize-y border border-white/15 bg-black/20 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c8f169]/60"
                  placeholder="Tell me a little about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#c8f169] px-5 py-3 text-sm font-semibold text-[#11130d] transition-colors hover:bg-[#d8ff83] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
