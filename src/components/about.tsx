"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Wrench, Star, MapPin, Mail, Phone, FileText, GraduationCap, Microscope, Sprout } from "lucide-react"

export default function About() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously exploring new technologies and methodologies to deliver cutting-edge solutions.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    },
    {
      icon: Wrench,
      title: "Problem-Solving",
      description: "Analytical approach to breaking down complex challenges into manageable solutions.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      hoverColor: "hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
    },
    {
      icon: Star,
      title: "Professionalism",
      description: "Maintaining high standards of quality, integrity, and client satisfaction in all projects.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      hoverColor: "hover:bg-violet-100 dark:hover:bg-violet-900/30",
    },
  ]

  const softSkills = [
    {
      name: "Leadership",
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    },
    {
      name: "Project Management",
      color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    },
    {
      name: "Communication",
      color: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
    },
    {
      name: "Team Collaboration",
      color: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    },
    {
      name: "Strategic Thinking",
      color: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    },
    {
      name: "Client Relations",
      color: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    },
  ]

  const hobbies = [
    { icon: FileText, text: "Tech Reviewing about Data" },
    { icon: GraduationCap, text: "Tech Mentorship & Knowledge Sharing" },
    { icon: Microscope, text: "Exploring Emerging Technologies" },
    { icon: Sprout, text: "Continuous Learning & Development" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional background in MIS, IT consulting, and development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Professional Bio */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full" />
                Professional Bio
              </h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-balance"
                >
                  With a strong foundation in Management Information Systems (MIS), I specialize in designing
                  intelligent systems that transform complex data into actionable business insights. My expertise spans
                  across IT consulting, system development, and data analytics.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-balance"
                >
                  I have a proven track record of delivering innovative solutions that drive business growth and
                  operational efficiency. My passion lies in creating data-driven systems that empower organizations to
                  make informed decisions and achieve their strategic objectives.
                </motion.p>
              </div>
            </div>

            {/* Enhanced core values */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full" />
                Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onHoverStart={() => setHoveredValue(index)}
                    onHoverEnd={() => setHoveredValue(null)}
                    className={`${value.bgColor} ${value.hoverColor} p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl`}
                  >
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      animate={{ rotate: hoveredValue === index ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="text-white text-xl" />
                    </motion.div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">{value.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced soft skills */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full" />
                Soft Skills
              </h3>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${skill.color} px-6 py-3 rounded-full font-medium border-2 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-default`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced side panel */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 dark:border-slate-700/50 shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/lia-professional.jpg" 
                  alt="Lekeufack Ivan Aldric - Professional Photo" 
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">LEKEUFACK IVAN ALDRIC</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">MIS Specialist & IT Consultant</p>
              <div className="space-y-3 text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Douala, Cameroon</span>
                </div>
                <div className="flex items-center justify-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>aldricivan8@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+237 659 245 063</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50/80 to-violet-50/80 dark:from-blue-900/20 dark:to-violet-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50 shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">Hobbies & Passion</h4>
              <div className="space-y-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <hobby.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{hobby.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
