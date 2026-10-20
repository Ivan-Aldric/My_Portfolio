"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, TrendingUp, GraduationCap, DollarSign } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Smart Task - Task Management Application",
      description: "Modern task management application with intuitive interface for managing tasks, tracking progress, and staying organized.",
      techStack: ["React", "TypeScript", "Vite", "shadcn/ui", "Tailwind CSS"],
      impact: "Streamlined task organization, improved productivity with modern UI",
      github: "#",
      live: "https://smart-task-one.vercel.app",
      icon: Code,
    },
    {
      title: "Sales Analytics & Decision Support System",
      description: "Role-based dashboard with comprehensive analytics and automated reporting.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PHPMailer"],
      impact: "Improved forecasting accuracy by 35%, reduced reporting time by 70%",
      github: "#",
      live: "#",
      icon: TrendingUp,
    },
    {
      title: "Web-Base Data Collection",
      description: "Automate and make it easier to gather and anaalys data directly saved to database.",
      techStack: ["React", "JavaScript", "CSS", "HTML", "API's"],
      impact: "Reduced collection time by 50%, improved satisfaction by 45%",
      github: "#",
      live: "https://web-base-data-collection.vercel.app",
      icon: GraduationCap,
    },
    {
      title: "Automated Bank Reconciliation System",
      description: "Intelligent bank statement reconciliation with matching algorithms.",
      techStack: ["PHP", "JavaScript", "Bootstrap", "MySQL", "CSV Processing"],
      impact: "Reduced reconciliation time from hours to minutes, 99.5% accuracy",
      github: "#",
      live: "#",
      icon: DollarSign,
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
          className="mb-12 grid gap-5 border-b border-white/15 pb-8 sm:mb-16 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#c8f169] sm:text-xs">
              <Code className="h-3.5 w-3.5" />
              Selected Work
            </div>
            <h2 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              Projects<span className="text-[#c8f169]">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
            Projects and case studies with practical, measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-3 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.article
                key={index}
                variants={projectVariants}
                whileHover={{ y: -2 }}
                className="group border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#c8f169]/40 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.15em] text-[#c8f169]">0{index + 1}</span>
                    <span className="flex h-9 w-9 items-center justify-center bg-[#c8f169]">
                      <IconComponent className="h-4 w-4 text-[#11130d]" />
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Project</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#c8f169] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-6 text-white/55">{project.description}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/55 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#c8f169]">Impact</div>
                    <p className="text-xs leading-5 text-white/65">{project.impact}</p>
                  </div>

                  <div className="flex shrink-0 gap-4">
                    {project.github !== "#" && (
                      <a href={project.github} className="inline-flex items-center gap-1.5 text-xs text-white/65 transition-colors hover:text-[#c8f169]">
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} className="inline-flex items-center gap-1.5 text-xs text-white/65 transition-colors hover:text-[#c8f169]">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
          <span>Management Information Systems</span>
          <a href="/experience" className="transition-colors hover:text-[#c8f169]">
            Click to learn more <span aria-hidden="true">→</span>
          </a>
        </div>
    </section>
  )
}
