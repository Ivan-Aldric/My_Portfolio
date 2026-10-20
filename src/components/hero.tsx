import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#090a09] text-[#f2f2ed]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-12 h-[42rem] w-[42rem] rounded-full border border-white/[0.06] sm:-right-32"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-12">
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
          <span>Portfolio / MIS Specialist</span>
          <span className="flex items-center gap-2 text-[#c8f169]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8f169]" />
            Available for new opportunities
          </span>
        </div>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:gap-16 lg:py-16">
          <div className="relative z-10">
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/45 sm:text-xs">
              Data <span className="px-2 text-[#c8f169]">/</span> Systems{" "}
              <span className="px-2 text-[#c8f169]">/</span> Innovation
            </p>

            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-7xl">
              Building
              <span className="block text-white/55">Smart Business</span>
              <span className="block">
                Solutions<span className="text-[#c8f169]">.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:mt-8 sm:text-base sm:leading-8">
              Passionate about designing intelligent systems that drive business growth. I specialize in creating
              data-driven solutions that transform complex information into actionable insights for modern
              organizations.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-white/15 py-4 text-[10px] uppercase tracking-[0.16em] text-white/65 sm:mt-8 sm:gap-x-6 sm:text-xs">
              <span>MIS Specialist</span>
              <span className="text-[#c8f169]">/</span>
              <span>Developer</span>
              <span className="text-[#c8f169]">/</span>
              <span>IT Consultant</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <a
                href="/projects"
                className="group inline-flex min-h-12 items-center justify-between gap-8 bg-[#c8f169] px-5 py-3 text-sm font-semibold text-[#11130d] transition-colors hover:bg-[#d8ff83]"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center gap-3 px-3 py-3 text-sm text-white/55 transition-colors hover:text-[#c8f169]"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[27rem] items-center justify-center lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute inset-[7%] rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[19%] rounded-full border border-[#c8f169]/25"
            />
            <div className="absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#c8f169]" />
            <div className="absolute bottom-[17%] right-[12%] h-1.5 w-1.5 rounded-full bg-[#c8f169]" />

            <div className="relative aspect-square w-[72%] overflow-hidden rounded-full border-2 border-[#c8f169]/80 bg-[#0d0f0c] shadow-[0_0_60px_rgba(200,241,105,0.12)]">
              <Image
                src="/lia-professional.jpg"
                alt="Portrait of Lia"
                fill
                priority
                sizes="(min-width: 1024px) 310px, 70vw"
                className="object-cover object-[center_64%]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
          <span>Management Information Systems</span>
          <a href="/about" className="transition-colors hover:text-[#c8f169]">
            Click to learn more <span aria-hidden="true">→</span>
          </a>
        </div>
    </section>
  )
}
