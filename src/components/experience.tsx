"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Code, CheckCircle, Building, Clock } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "IT Consultant & Developer",
      company: "Global IT Corporation",
      period: "2024 from March to June",
      type: "Internship",
      description:
        "Led the development of Sales Analytics & Decision Support System project. Implemented role-based dashboards, analytics modules, and PHPMailer integration for automated reporting.",
      achievements: [
        "Developed comprehensive analytics dashboard with real-time data visualization",
        "Implemented automated reporting system reducing manual work by 70%",
        "Collaborated with cross-functional teams to deliver project on time and within budget",
        "Conducted system audits and provided recommendations for process optimization",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js", "PHPMailer"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Applied Computing in Management Information Systems",
      institution: "Institut Universitaire De La Cote",
      period: "2022 - 2025",
      description:
        "Comprehensive program covering business intelligence, system analysis, database management, and IT consulting methodologies.",
      relevantCourses: [
        "Database Management Systems",
        "Business Intelligence & Analytics",
        "System Analysis & Design",
        "Project Management",
        "IT Consulting & Auditing",
        "IT Support & Maintenance",
        "Data Visualization",
        "Network Administration",
        "Web Application Development",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="experience"
      className="dark relative overflow-hidden bg-[#090a09] py-20 text-[#f2f2ed]"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c8f169]/10 dark:bg-[#c8f169]/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#c8f169]/10 dark:bg-[#c8f169]/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#c8f169]/10 dark:bg-[#c8f169]/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Professional journey and academic foundation in technology and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="border border-[#c8f169]/30 bg-[#c8f169]/10 rounded-xl p-3">
                <Briefcase className="w-6 h-6 text-[#c8f169]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#c8f169]/50"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-4 h-4 bg-[#c8f169] rounded-full border-4 border-[#090a09]"></div>

                    <div className="ml-16 group">
                      <motion.div
                        className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white transition-colors group-hover:text-[#c8f169]">
                              {exp.title}
                            </h4>
                            <div className="flex items-center gap-2 font-semibold text-[#c8f169]">
                              <Building className="h-4 w-4" />
                              {exp.company}
                            </div>
                          </div>
                          <span className="border border-[#c8f169]/40 rounded-full px-3 py-1 text-sm font-medium text-[#c8f169]">
                            {exp.type}
                          </span>
                        </div>

                        <div className="mb-4 flex items-center gap-2 text-sm text-white/55">
                          <Calendar className="h-4 w-4 text-[#c8f169]" />
                          {exp.period}
                        </div>

                        <p className="mb-6 leading-relaxed text-white/65">{exp.description}</p>

                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="h-4 w-4 text-[#c8f169]" />
                            <h5 className="font-semibold text-white">Key Achievements</h5>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start text-sm text-white/60"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <CheckCircle className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-[#c8f169]" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Code className="h-4 w-4 text-[#c8f169]" />
                            <h5 className="font-semibold text-white">Technologies Used</h5>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="bg-white/[0.04] border border-white/10 text-white/60 px-3 py-1 rounded-lg text-xs font-medium hover:border-[#c8f169]/50 hover:text-[#c8f169] transition-transform cursor-default"
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="border border-[#c8f169]/30 bg-[#c8f169]/10 rounded-xl p-3">
                <GraduationCap className="w-6 h-6 text-[#c8f169]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <motion.div
                    className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="mb-4">
                      <h4 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#c8f169]">
                        {edu.degree}
                      </h4>
                      <div className="mb-1 flex items-center gap-2 font-semibold text-[#c8f169]">
                        <MapPin className="h-4 w-4" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/55">
                        <Clock className="h-4 w-4 text-[#c8f169]" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-white/65">{edu.description}</p>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-4 w-4 text-[#c8f169]" />
                        <h5 className="font-semibold text-white">Relevant Coursework</h5>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <motion.div
                            key={courseIndex}
                            className="flex items-center text-sm text-white/60 p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#c8f169]/40 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: courseIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-[#c8f169]" />
                            {course}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
