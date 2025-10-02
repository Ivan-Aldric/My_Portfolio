"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
} from "lucide-react"
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

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendViaEmailJS = async () => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!publicKey || publicKey === "YOUR_EMAILJS_PUBLIC_KEY") {
      throw new Error("EmailJS not configured")
    }

    const serviceId = "service_portfolio"
    const templateId = "template_contact"
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Portfolio Contact Form",
      message: formData.message,
      to_name: "Ivan Aldric",
    }

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
    
    if (response.status === 200) {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } else {
      throw new Error("EmailJS failed")
    }
  }

  const sendViaAPI = async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Contact Form",
        message: formData.message,
      }),
    })

    if (response.ok) {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } else {
      throw new Error("API failed")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Try multiple methods for better reliability
      const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xqadwnbj"
      
      // Method 1: Try Formspree with proper headers
      const formspreeEndpoint = `https://formspree.io/f/${formspreeFormId}`
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
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
        // Method 2: Fallback to EmailJS if Formspree fails
        console.log("Formspree failed, trying EmailJS fallback...")
        await sendViaEmailJS()
      }
    } catch (error) {
      console.error("Formspree error:", error)
      // Try EmailJS as fallback
      try {
        await sendViaEmailJS()
      } catch (emailjsError) {
        console.error("EmailJS error:", emailjsError)
        // Try API route as final fallback
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aldricivan8@gmail.com",
      color: "blue",
      href: "mailto:aldricivan8@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: ["+237 657 910 666", "+237 659 245 063", "+237 672 217 287"],
      color: "green",
      href: "tel:+237657910666",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cameroon",
      color: "purple",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      description: "Professional Network",
      href: "https://linkedin.com/in/lekeufack-ivan-aldric",
      color: "blue",
    },
    {
      icon: Github,
      name: "GitHub",
      description: "Code Repository",
      href: "https://github.com/lekeufack-ivan-aldric",
      color: "slate",
    },
    {
      icon: Twitter,
      name: "Twitter",
      description: "Tech Insights",
      href: "https://twitter.com/lekeufack_ivan",
      color: "sky",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      description: "Quick Chat",
      href: "https://wa.me/237659245063",
      color: "green",
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&#39;s Collaborate on Your Next Project!
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your ideas into intelligent, data-driven solutions. Let&#39;s connect and discuss how we can
            work together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-2 sm:mr-3 flex items-center justify-center">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <div className="flex items-center p-4 sm:p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${
                            info.color === "blue"
                              ? "from-blue-500 to-blue-600"
                              : info.color === "green"
                                ? "from-green-500 to-green-600"
                                : "from-purple-500 to-purple-600"
                          } rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">{info.label}</p>
                          {Array.isArray(info.value) ? (
                            info.value.map((val, i) => (
                              <p key={i} className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base">
                                {val}
                              </p>
                            ))
                          ) : (
                            <p className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-2 sm:mr-3 flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="group flex items-center p-3 sm:p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${
                          social.color === "blue"
                            ? "from-blue-500 to-blue-600"
                            : social.color === "slate"
                              ? "from-slate-600 to-slate-700"
                              : social.color === "sky"
                                ? "from-sky-500 to-sky-600"
                                : "from-green-500 to-green-600"
                        } rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{social.name}</p>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{social.description}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-2 sm:mr-3 flex items-center justify-center">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Send a Message
              </h3>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      Message sent successfully! I&#39;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      Failed to send message. Please try again or contact me directly.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 dark:text-white transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 dark:text-white transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 dark:text-white transition-all duration-300 text-sm sm:text-base"
                    placeholder="Project Inquiry / Collaboration"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 dark:text-white transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <motion.div
                className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 text-center flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="font-semibold">Response Time:</span>&nbsp;I typically respond within 24 hours
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
