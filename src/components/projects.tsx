"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Database, Smartphone, TrendingUp, GraduationCap, DollarSign } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Smart Local Services Marketplace",
      description: "Comprehensive marketplace platform with admin insights and analytics dashboard.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js"],
      impact: "Increased bookings by 40%, reduced admin overhead by 60%",
      github: "#",
      live: "#",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Sales Analytics & Decision Support System",
      description: "Role-based dashboard with comprehensive analytics and automated reporting.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PHPMailer"],
      impact: "Improved forecasting accuracy by 35%, reduced reporting time by 70%",
      github: "#",
      live: "#",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Smart School Fees Management System",
      description: "Automated fee collection system with parent portal and notifications.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "SMS API"],
      impact: "Reduced collection time by 50%, improved satisfaction by 45%",
      github: "#",
      live: "#",
      icon: GraduationCap,
      gradient: "from-green-500 to-emerald-500",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Automated Bank Reconciliation System",
      description: "Intelligent bank statement reconciliation with matching algorithms.",
      techStack: ["PHP", "JavaScript", "Bootstrap", "MySQL", "CSV Processing"],
      impact: "Reduced reconciliation time from hours to minutes, 99.5% accuracy",
      github: "#",
      live: "#",
      icon: DollarSign,
      gradient: "from-orange-500 to-red-500",
      image: "/api/placeholder/400/300",
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="projects"
      className="py-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg"
          >
            <Code className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Innovative solutions with measurable impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200/50 dark:border-slate-700/50"
              >
                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} relative`}>
                    {/* Placeholder for actual project image */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <IconComponent className="w-10 h-10 mx-auto mb-1 opacity-80" />
                        <p className="text-xs font-medium opacity-90">Project</p>
                      </div>
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Impact badge */}
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        Impact
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-3">
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1 mt-auto">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-1 bg-slate-900 dark:bg-slate-700 text-white px-2 py-1.5 rounded-md hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors text-xs font-medium"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white px-2 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-xs font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
