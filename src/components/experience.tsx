"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Code, CheckCircle, Building, Clock } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "IT Consultant & Developer",
      company: "Global IT Corporation",
      period: "2023 - Present",
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
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      period: "2022 - 2023",
      type: "Freelance",
      description:
        "Delivered custom web solutions for small to medium businesses, focusing on data-driven applications and business intelligence systems.",
      achievements: [
        "Built 15+ custom web applications with focus on business intelligence",
        "Improved client operational efficiency by an average of 40%",
        "Maintained 100% client satisfaction rate with on-time project delivery",
        "Specialized in PHP-based solutions with modern UI/UX design",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Tailwind CSS", "Git"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Applied Computing in Management Information Systems",
      institution: "Institut Universitaire De La Cote",
      period: "2020 - 2024",
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
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional journey and academic foundation in technology and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

                    <div className="ml-16 group">
                      <motion.div
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {exp.title}
                            </h4>
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                              <Building className="w-4 h-4" />
                              {exp.company}
                            </div>
                          </div>
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-4 h-4 text-green-500" />
                            <h5 className="font-semibold text-slate-900 dark:text-white">Key Achievements</h5>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start text-sm text-slate-600 dark:text-slate-300"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Code className="w-4 h-4 text-purple-500" />
                            <h5 className="font-semibold text-slate-900 dark:text-white">Technologies Used</h5>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg text-xs font-medium hover:scale-105 transition-transform cursor-default"
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
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <motion.div
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold mb-1">
                        <MapPin className="w-4 h-4" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <Clock className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{edu.description}</p>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-blue-500" />
                        <h5 className="font-semibold text-slate-900 dark:text-white">Relevant Coursework</h5>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <motion.div
                            key={courseIndex}
                            className="flex items-center text-sm text-slate-600 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: courseIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
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
