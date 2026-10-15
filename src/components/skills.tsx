"use client"

import { motion } from "framer-motion"
import { Code2, Wrench, BarChart3, Search, Palette, ClipboardList, TrendingUp, Zap } from "lucide-react"

export default function Skills() {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        "PHP",
        "JavaScript", 
        "Python",
        "SQL",
        "TypeScript",
        "HTML5",
        "CSS3"
      ],
      icon: Code2,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
        "Chart.js",
        "Framer Motion"
      ],
      icon: Wrench,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
    {
      category: "Development Tools",
      skills: [
        "XAMPP",
        "SQL Server Management Studio",
        "Git",
        "VS Code",
        "MySQL",
        "Supabase",
        "PostgreSQL"
      ],
      icon: Wrench,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
    {
      category: "Data & Analytics",
      skills: [
        "Business Intelligence",
        "Data Analytics", 
        "Decision Support Systems",
        "Data Visualization",
        "Statistical Analysis",
        "Reporting Systems"
      ],
      icon: BarChart3,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
  ]

  const professionalSkills = [
    {
      category: "IT Consulting & Auditing",
      skills: ["System Analysis", "Process Optimization", "Technology Assessment", "IT Auditing", "Risk Management"],
      icon: Search,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
    {
      category: "UI/UX Design",
      skills: ["User Research", "Wireframing", "Prototyping", "Interface Design", "User Experience"],
      icon: Palette,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
    {
      category: "Project/Product Management",
      skills: ["Agile Methodologies", "Stakeholder Management", "Project Planning", "Team Leadership", "Quality Assurance"],
      icon: ClipboardList,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
    {
      category: "Data Analysis & Decision Support",
      skills: ["Statistical Analysis", "Business Intelligence", "Data Mining", "Report Generation", "Decision Support"],
      icon: TrendingUp,
      color: "from-[#c8f169] to-[#8fac3e]",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-5 border-b border-white/15 pb-8 sm:mb-20 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#c8f169] sm:text-xs">
              <Zap className="h-3.5 w-3.5" />
              Skills & Expertise
            </div>
            <h2 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              Technical Mastery<span className="text-[#c8f169]">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
            Software development, data, design, and delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="mb-6 flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
          >
            <span className="text-xs font-normal tracking-[0.2em] text-[#c8f169]">01 /</span>
            Technical Skills
          </motion.h3>
          <div className="grid gap-3 md:grid-cols-2">
            {technicalSkills.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="group border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#c8f169]/40 sm:p-6"
                >
                  <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                    <div
                      className={`h-10 w-10 bg-gradient-to-r ${category.color} p-2.5 transition-transform duration-300 group-hover:scale-105`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-base font-semibold text-white sm:text-lg">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/60 transition-colors hover:border-[#c8f169]/50 hover:text-[#c8f169] sm:text-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="mb-6 flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
          >
            <span className="text-xs font-normal tracking-[0.2em] text-[#c8f169]">02 /</span>
            Professional Skills
          </motion.h3>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {professionalSkills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="grid gap-3 py-4 sm:grid-cols-[minmax(12rem,0.7fr)_2fr] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 bg-gradient-to-r ${skill.color} p-2`}>
                      <skill.icon className="h-full w-full text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-white sm:text-base">{skill.category}</h4>
                  </div>
                  <p className="text-xs leading-6 text-white/55 sm:text-sm">{skill.skills.join(" · ")}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
