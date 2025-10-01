"use client"

import { motion } from "framer-motion"
import { Code2, Wrench, BarChart3, Search, Palette, ClipboardList, TrendingUp, Award, Star, Zap } from "lucide-react"

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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-purple-500 to-pink-500",
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
      color: "from-orange-500 to-red-500",
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
      color: "from-green-500 to-emerald-500",
    },
  ]

  const professionalSkills = [
    {
      category: "IT Consulting & Auditing",
      description: "System analysis, process optimization, and technology assessment",
      skills: ["System Analysis", "Process Optimization", "Technology Assessment", "IT Auditing", "Risk Management"],
      icon: Search,
      color: "from-orange-500 to-red-500",
    },
    {
      category: "UI/UX Design",
      description: "User-centered design, wireframing, and interface optimization",
      skills: ["User Research", "Wireframing", "Prototyping", "Interface Design", "User Experience"],
      icon: Palette,
      color: "from-pink-500 to-rose-500",
    },
    {
      category: "Project/Product Management",
      description: "Agile methodologies, stakeholder management, and delivery coordination",
      skills: ["Agile Methodologies", "Stakeholder Management", "Project Planning", "Team Leadership", "Quality Assurance"],
      icon: ClipboardList,
      color: "from-indigo-500 to-purple-500",
    },
    {
      category: "Data Analysis & Decision Support",
      description: "Statistical analysis, reporting, and business intelligence solutions",
      skills: ["Statistical Analysis", "Business Intelligence", "Data Mining", "Report Generation", "Decision Support"],
      icon: TrendingUp,
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const certifications = [
    { name: "Microsoft Office PowerPoint Specialist", issuer: "Microsoft", year: "2024", level: "Specialist" },
    { name: "HTML5 Specialist", issuer: "Sololearn", year: "2023", level: "Certified" },
    { name: "Microsoft Office Word Specialist", issuer: "Microsoft", year: "2024", level: "Specialist" },
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
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:20px_20px] opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-4">
            Technical Mastery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive technical proficiency and professional capabilities across multiple domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 lg:mb-12 text-center"
          >
            Technical Skills
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {technicalSkills.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r ${category.color} p-2 lg:p-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 px-3 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-sm hover:shadow-md"
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
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 lg:mb-12 text-center"
          >
            Professional Skills
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {professionalSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div
                      className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${skill.color} p-3 lg:p-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2 lg:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.category}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base mb-4">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((skillItem, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md text-xs font-medium hover:scale-105 transition-transform cursor-default"
                          >
                            {skillItem}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 lg:mb-12 text-center"
          >
            Certifications & Achievements
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-700 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 lg:mb-3 text-base lg:text-lg leading-tight">{cert.name}</h4>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-sm lg:text-base">{cert.issuer}</p>
                    <div className="flex items-center justify-center gap-2 lg:gap-4 text-xs lg:text-sm">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 lg:px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 lg:px-3 py-1 rounded-full">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
