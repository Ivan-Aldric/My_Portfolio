"use client"

import { motion } from "framer-motion"
import { Lightbulb, Wrench, Star } from "lucide-react"

export default function About() {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously exploring new technologies and methodologies to deliver cutting-edge solutions.",
      color: "from-[#c8f169] to-[#8fac3e]",
      bgColor: "bg-white/[0.03]",
      hoverColor: "hover:bg-white/[0.06]",
    },
    {
      icon: Wrench,
      title: "Problem-Solving",
      description: "Analytical approach to breaking down complex challenges into manageable solutions.",
      color: "from-[#c8f169] to-[#8fac3e]",
      bgColor: "bg-white/[0.03]",
      hoverColor: "hover:bg-white/[0.06]",
    },
    {
      icon: Star,
      title: "Professionalism",
      description: "Maintaining high standards of quality, integrity, and client satisfaction in all projects.",
      color: "from-[#c8f169] to-[#8fac3e]",
      bgColor: "bg-white/[0.03]",
      hoverColor: "hover:bg-white/[0.06]",
    },
  ]

  const softSkills = [
    {
      name: "Leadership",
      color: "bg-white/[0.03] text-white/70 border-white/15",
    },
    {
      name: "Project Management",
      color: "bg-white/[0.03] text-white/70 border-white/15",
    },
    {
      name: "Communication",
      color: "bg-white/[0.03] text-white/70 border-white/15",
    },
    {
      name: "Team Collaboration",
      color: "bg-white/[0.03] text-white/70 border-white/15",
    },
    {
      name: "Strategic Thinking",
      color: "bg-white/[0.03] text-white/70 border-white/15",
    },
    {
      name: "Client Relations",
      color: "bg-white/[0.03] text-white/70 border-white/15",
    },
  ]

  return (
    <section
      id="about"
      className="dark relative overflow-hidden bg-[#090a09] py-24 text-[#f2f2ed] sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-5 border-b border-white/15 pb-8 sm:mb-16 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/45 sm:text-xs">
              01 <span className="px-2 text-[#c8f169]">/</span> About
            </p>
            <motion.h2
              className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me<span className="text-[#c8f169]">.</span>
            </motion.h2>
          </div>
          <motion.p
            className="max-w-md text-sm leading-7 text-white/55 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional background in MIS, IT consulting, and development
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="grid content-start gap-12 lg:grid-cols-2 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-[#c8f169]" />
                Professional Bio
              </h3>
              <div className="max-w-2xl space-y-4 text-base leading-7 text-white/60">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  With a strong foundation in Management Information Systems (MIS), I specialize in designing
                  intelligent systems that transform complex data into actionable business insights. My expertise spans
                  across IT consulting, system development, and data analytics.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I have a proven track record of delivering innovative solutions that drive business growth and
                  operational efficiency. My passion lies in creating data-driven systems that empower organizations to
                  make informed decisions and achieve their strategic objectives.
                </motion.p>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-[#c8f169]" />
                Core Values
              </h3>
              <div className="grid gap-3">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className={`${value.bgColor} ${value.hoverColor} flex items-start gap-4 border border-white/10 p-4 transition-colors duration-300`}
                  >
                    <motion.div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br ${value.color}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <value.icon className="text-white text-lg lg:text-xl" />
                    </motion.div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">{value.title}</h4>
                      <p className="text-sm leading-6 text-white/55">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-5 lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-[#c8f169]" />
                Soft Skills
              </h3>
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4"
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
                    className={`${skill.color} border px-3 py-2 font-medium text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-[#c8f169] hover:text-[#c8f169] sm:text-xs`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
