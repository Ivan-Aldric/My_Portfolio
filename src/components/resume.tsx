"use client"

import { motion } from "framer-motion"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Globe,
  Zap,
} from "lucide-react"

export default function Resume() {
  const handleDownloadResume = () => {
    // Create a new window with the resume content
    const resumeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>LEKEUFACK IVAN ALDRIC - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px; }
          .name { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 5px; }
          .title { font-size: 18px; color: #6b7280; margin-bottom: 15px; }
          .contact { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 20px; }
          .contact-item { display: flex; align-items: center; gap: 5px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 20px; font-weight: bold; color: #2563eb; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 10px; }
          .experience-item, .education-item { margin-bottom: 20px; }
          .job-title { font-weight: bold; font-size: 16px; color: #1f2937; }
          .company { color: #6b7280; font-weight: 500; }
          .period { color: #9ca3af; font-size: 14px; }
          .description { margin: 10px 0; }
          .achievements { margin: 10px 0; }
          .achievements ul { margin: 5px 0; padding-left: 20px; }
          .achievements li { margin-bottom: 3px; }
          .skills { display: flex; flex-wrap: wrap; gap: 8px; }
          .skill { background: #e5e7eb; padding: 4px 8px; border-radius: 4px; font-size: 14px; }
          .education-degree { font-weight: bold; color: #1f2937; }
          .institution { color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">LEKEUFACK IVAN ALDRIC</div>
          <div class="title">MIS Specialist | Developer | IT Consultant</div>
          <div class="contact">
            <div class="contact-item">📧 aldricivan8@gmail.com</div>
            <div class="contact-item">📱 +237 657 910 666</div>
            <div class="contact-item">📱 +237 659 245 063</div>
            <div class="contact-item">📍 Douala, Cameroon</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Summary</div>
          <p>Passionate MIS specialist with expertise in designing intelligent systems that transform complex data into actionable business insights. Proven track record in IT consulting, system development, and data analytics with a focus on delivering innovative solutions that drive business growth and operational efficiency.</p>
        </div>

        <div class="section">
          <div class="section-title">Professional Experience</div>
          
          <div class="experience-item">
            <div class="job-title">IT Consultant & Developer</div>
            <div class="company">Global IT Corporation</div>
            <div class="period">2023 - Present (Internship)</div>
            <div class="description">Led the development of Sales Analytics & Decision Support System project. Implemented role-based dashboards, analytics modules, and PHPMailer integration for automated reporting.</div>
            <div class="achievements">
              <strong>Key Achievements:</strong>
              <ul>
                <li>Developed comprehensive analytics dashboard with real-time data visualization</li>
                <li>Implemented automated reporting system reducing manual work by 70%</li>
                <li>Collaborated with cross-functional teams to deliver project on time and within budget</li>
                <li>Conducted system audits and provided recommendations for process optimization</li>
              </ul>
            </div>
            <div><strong>Technologies:</strong> <span class="skills"><span class="skill">PHP</span><span class="skill">MySQL</span><span class="skill">JavaScript</span><span class="skill">Bootstrap</span><span class="skill">Chart.js</span><span class="skill">PHPMailer</span></span></div>
          </div>

          <div class="experience-item">
            <div class="job-title">Freelance Web Developer</div>
            <div class="company">Various Clients</div>
            <div class="period">2022 - 2023</div>
            <div class="description">Delivered custom web solutions for small to medium businesses, focusing on data-driven applications and business intelligence systems.</div>
            <div class="achievements">
              <strong>Key Achievements:</strong>
              <ul>
                <li>Built 15+ custom web applications with focus on business intelligence</li>
                <li>Improved client operational efficiency by an average of 40%</li>
                <li>Maintained 100% client satisfaction rate with on-time project delivery</li>
                <li>Specialized in PHP-based solutions with modern UI/UX design</li>
              </ul>
            </div>
            <div><strong>Technologies:</strong> <span class="skills"><span class="skill">PHP</span><span class="skill">MySQL</span><span class="skill">JavaScript</span><span class="skill">Bootstrap</span><span class="skill">Tailwind CSS</span><span class="skill">Git</span></span></div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          <div class="education-item">
            <div class="education-degree">Bachelor of Applied Computing in Management Information Systems</div>
            <div class="institution">Institut Universitaire De La Cote</div>
            <div class="period">2020 - 2024</div>
            <div class="description">Comprehensive program covering business intelligence, system analysis, database management, and IT consulting methodologies.</div>
            <div><strong>Relevant Coursework:</strong> Database Management Systems, Business Intelligence & Analytics, System Analysis & Design, Project Management, IT Consulting & Auditing, IT Support & Maintenance, Data Visualization, Network Administration, Web Application Development</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div><strong>Programming Languages:</strong> <span class="skills"><span class="skill">PHP</span><span class="skill">JavaScript</span><span class="skill">Python</span><span class="skill">SQL</span><span class="skill">TypeScript</span><span class="skill">React</span><span class="skill">Node.js</span></span></div>
          <div><strong>Development Tools:</strong> <span class="skills"><span class="skill">XAMPP</span><span class="skill">MySQL</span><span class="skill">Supabase</span><span class="skill">Bootstrap</span><span class="skill">Tailwind CSS</span><span class="skill">Git</span><span class="skill">VS Code</span></span></div>
          <div><strong>Data & Analytics:</strong> <span class="skills"><span class="skill">Business Intelligence</span><span class="skill">Data Analytics</span><span class="skill">Decision Support Systems</span><span class="skill">Data Visualization</span></span></div>
        </div>

        <div class="section">
          <div class="section-title">Professional Skills</div>
          <div><strong>Core Competencies:</strong> IT Consulting & Auditing, UI/UX Design, Project/Product Management, Data Analysis & Decision Support, Leadership, Communication, Team Collaboration, Strategic Thinking, Client Relations</div>
        </div>

        <div class="section">
          <div class="section-title">Notable Projects</div>
          <div class="experience-item">
            <div class="job-title">Smart Local Services Marketplace</div>
            <div class="description">Comprehensive marketplace platform with advanced admin insights and analytics dashboard. Increased local service bookings by 40% and reduced administrative overhead by 60%.</div>
            <div><strong>Technologies:</strong> PHP, MySQL, JavaScript, Bootstrap, Chart.js</div>
          </div>
          <div class="experience-item">
            <div class="job-title">Sales Analytics & Decision Support System</div>
            <div class="description">Role-based dashboard system with comprehensive analytics and automated reporting. Improved sales forecasting accuracy by 35% and reduced reporting time by 70%.</div>
            <div><strong>Technologies:</strong> PHP, MySQL, JavaScript, Bootstrap, PHPMailer</div>
          </div>
        </div>
      </body>
      </html>
    `

    // Create a blob with the HTML content
    const blob = new Blob([resumeContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    
    // Create a temporary link and trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = 'LEKEUFACK_IVAN_ALDRIC_Resume.html'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up the URL object
    URL.revokeObjectURL(url)
    
    // Show success message
    alert('Resume downloaded successfully! You can open the HTML file and print it as PDF using your browser\'s print function.')
  }
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
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            Resume / CV
          </motion.h2>
          <motion.p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto" variants={itemVariants}>
            Download my professional resume for detailed information about my experience and qualifications
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/50 p-8 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>

          <motion.div className="text-center mb-8" variants={itemVariants}>
            <motion.div
              className="w-28 h-28 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <span className="text-white text-3xl font-bold relative z-10">LIA</span>
            </motion.div>
            <motion.h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2" variants={itemVariants}>
              LEKEUFACK IVAN ALDRIC
            </motion.h3>
            <motion.p className="text-blue-600 dark:text-blue-400 font-semibold mb-6 text-lg" variants={itemVariants}>
              MIS Specialist | Developer | IT Consultant
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-6 text-sm" variants={itemVariants}>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full">
                <Phone className="w-4 h-4 text-green-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Your City, Country</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Summary</h4>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-blue-100 dark:border-slate-600">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-lg">
                  Experienced MIS Specialist and IT Consultant with a proven track record in designing intelligent
                  systems that transform complex data into actionable business insights. Expertise in full-stack
                  development, business intelligence, and data analytics. Passionate about creating data-driven
                  solutions that drive business growth and operational efficiency.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    title: "Programming Languages",
                    skills: "PHP, JavaScript, Python, SQL, TypeScript",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Globe,
                    title: "Frameworks & Libraries",
                    skills: "React, Node.js, Bootstrap, Tailwind CSS",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Database,
                    title: "Tools & Technologies",
                    skills: "XAMPP, MySQL, Supabase, Git, VS Code",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Zap,
                    title: "Data & Analytics",
                    skills: "Business Intelligence, Data Analytics, DSS",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}
                      >
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="font-semibold text-slate-900 dark:text-white">{skill.title}</h5>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{skill.skills}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h4>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: "IT Consultant & Developer",
                    period: "2023 - Present",
                    company: "Global IT Corporation",
                    achievements: [
                      "Led development of Sales Analytics & Decision Support System",
                      "Implemented role-based dashboards and automated reporting",
                      "Reduced manual reporting time by 70%",
                    ],
                  },
                  {
                    title: "Freelance Web Developer",
                    period: "2022 - 2023",
                    company: "Various Clients",
                    achievements: [
                      "Built 15+ custom web applications",
                      "Improved client operational efficiency by 40%",
                      "Maintained 100% client satisfaction rate",
                    ],
                  },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <h5 className="font-bold text-slate-900 dark:text-white text-lg">{job.title}</h5>
                      <span className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full font-medium">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">{job.company}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h4>
              </div>
              <motion.div
                className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-indigo-100 dark:border-slate-600"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-slate-900 dark:text-white text-lg">
                    Bachelor of Science in Management Information Systems
                  </h5>
                  <span className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full font-medium">
                    2020 - 2024
                  </span>
                </div>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                  Institut Universitaire De La Cote
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Microsoft Azure Fundamentals", year: "2024", color: "from-blue-500 to-cyan-500" },
                  { name: "Google Analytics Certified", year: "2023", color: "from-green-500 to-emerald-500" },
                  { name: "Project Management Professional", year: "2023", color: "from-purple-500 to-pink-500" },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center relative overflow-hidden"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}></div>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-2">{cert.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <motion.button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10 text-lg">Download PDF Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
