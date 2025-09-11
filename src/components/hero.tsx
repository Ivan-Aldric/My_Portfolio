import { ArrowRight, Download, Mail, Sparkles, Code, Database, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:20px_20px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent dark:via-slate-900/50" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-40" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4" />
              Available for new opportunities
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  Smart Business Solutions
                </span>
              </h1>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-lg md:text-xl text-slate-600 dark:text-slate-300 font-semibold">
                  <Code className="w-5 h-5 text-blue-500" />
                  MIS Specialist
                </div>
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <div className="flex items-center gap-2 text-lg md:text-xl text-slate-600 dark:text-slate-300 font-semibold">
                  <Database className="w-5 h-5 text-indigo-500" />
                  Developer
                </div>
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <div className="flex items-center gap-2 text-lg md:text-xl text-slate-600 dark:text-slate-300 font-semibold">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  IT Consultant
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
              Passionate about designing intelligent systems that drive business growth. I specialize in creating
              data-driven solutions that transform complex information into actionable insights for modern
              organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resume"
                className="group inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Circle */}
              <div className="relative w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/20 animate-pulse">
                <div className="w-80 h-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <div className="text-center space-y-2">
                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      LIA
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Data • Systems • Innovation
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Floating Particles */}
              <div
                className="absolute -top-8 -right-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute top-1/4 -left-12 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-ping opacity-70" />
              <div className="absolute bottom-1/4 -right-12 w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full animate-pulse opacity-80" />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
