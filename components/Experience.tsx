"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Solutions Architect",
    company: "Sun Studios (California-based Solar Solutions Provider)",
    period: "Recent Project",
    description:
      "Designed website and built web applications including an Ideal Solar Configuration finder using Google Solar API and a Customized Solar Proposal Generator with Dashboarding.",
  },
  {
    title: "Solutions Provider",
    company: "National Level Project",
    period: "Recent Project",
    description:
      "Designed, developed, delivered, and deployed a National Level Data Collection application in just 3 days.",
  },
  {
    title: "Solutions Architect",
    company: "Elysian Innovations",
    period: "Jun 2024 - Present",
    description: "Leading complex technical initiatives and delivering tailored solutions.",
  },
  {
    title: "Chief Technology Officer",
    company: "ThrillSpeak Education Services",
    period: "Mar 2021 - Jun 2024",
    description: "Oversaw technology strategy and implementation for educational services.",
  },
]

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-black text-green-400 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002200_1px,transparent_1px),linear-gradient(to_bottom,#002200_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            EXPERIENCE_LOG
          </h2>
          <p className="text-green-500/60 font-mono text-lg max-w-2xl mx-auto">
            {"// DECRYPTING CAREER HISTORY..."}
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-green-900/50 md:left-1/2 md:-translate-x-1/2" />

              {/* Timeline Dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 bg-green-500 rounded-full md:left-1/2 md:-translate-x-1/2 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />

              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="inline-block bg-green-900/30 text-green-400 text-xs font-mono px-2 py-1 rounded border border-green-800 mb-2">
                    LOG_ID: {String(index + 1).padStart(3, "0")}
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-green-100">{exp.title}</h3>
                  <h4 className="text-lg text-green-500 font-mono mb-1">{exp.company}</h4>
                  <p className="text-green-600/80 font-mono text-sm">{exp.period}</p>
                </div>

                <div className="md:w-[45%]">
                  <div className="bg-green-950/10 border border-green-900/50 p-6 rounded-xl hover:border-green-400/50 transition-colors duration-300 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <p className="font-mono text-green-300/90 relative z-10 leading-relaxed">
                      <span className="text-green-600 mr-2">&gt;</span>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

